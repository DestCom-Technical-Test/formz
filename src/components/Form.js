import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import firebase from "firebase/app";
import 'firebase/firestore';
import '../styles/Form.css';
import Input from "./Input";
import Infos from "./Infos";

var ovh = require('ovh')({
    appKey: process.env.REACT_APP_OVH_APP_KEY,
    appSecret: process.env.REACT_APP_OVH_APP_SECRET,
    consumerKey: process.env.REACT_APP_OVH_CONSUMER_KEY
})

function Form() {
    const [nom, nomUpdate] = useState(null)
    const [prenom, prenomUpdate] = useState(null)
    const [rue, rueUpdate] = useState(null)
    const [cp, cpUpdate] = useState(null)
    const [ville, villeUpdate] = useState(null)
    const [pays, paysUpdate] = useState(null)
    const [phone, phoneUpdate] = useState(null)
    const [comments, commentsUpdate] = useState(null)
    const [information, informationUpdate] = useState(false)
    const [submitButton, submitButtonUpdate] = useState(false)
    const numberOfUser = []

    function sendSMS() {
        console.log(numberOfUser)
        ovh.request('GET', '/sms', function (err, serviceName ) {
            if (err) {
                console.log(err, serviceName);
            } else {
                console.log('Success, account :', serviceName, 'is online');
                let userID = uuidv4();
                numberOfUser.push(phone)

                firebase.firestore().collection('datas').doc(userID).set({
                    'lastName': nom ,
                    'firstName': prenom ,
                    'adress': rue + ' ' + cp + ' ' + ville + ' ' + pays ,
                    'comments': comments ,
                });

                let message = 'http://www.' + window.location.host + '/result/' + userID + '/' + numberOfUser[0] ;

                ovh.request('POST', '/sms/' + serviceName + '/jobs/', {
                    message: message,
                    senderForResponse: true,
                    receivers: numberOfUser
                }, function (errsend, result) {
                    if(errsend){
                        console.log('error:', errsend)
                    }else{
                        window.location = '/success';
                    }
                })
            }
        })
    }

    function verifNumber(value){
        /* eslint "no-control-regex": 0 */
        let phoneRegex = /^((\+)33)[1-9](\d{2}){4}$/
        if(phoneRegex.test(value)){
            let valueChange = '';
            valueChange = value.replace('+', '00');
            phoneUpdate(valueChange);
            document.querySelector('.tel').classList.remove('false');
            document.querySelector('.tel').classList.add('good');
        }else{
            phoneUpdate('');
            document.querySelector('.tel').classList.remove('good');
            document.querySelector('.tel').classList.add('false');
        }
    }

    function canSubmit(){
        if(nom !== (null || '') && prenom !== (null || '') && rue !==(null || '') && cp !==(null || '') && ville !==(null || '') && pays !==(null || '') && phone!==(null || '')){
            submitButtonUpdate(true);
            document.querySelector('.warning').classList.add('hidden');
        }
        else{
            submitButtonUpdate(false);
            document.querySelector('.warning').classList.remove('hidden');
            document.getElementById("checkbox").checked = false;
        }
    }

    console.log(phone)
    console.log(uuidv4())
    return (
        <>
            <section id='form'>
            {information ? <Infos informationUpdate={informationUpdate} /> : <Input nomUpdate={nomUpdate} prenomUpdate={prenomUpdate} rueUpdate={rueUpdate} cpUpdate={cpUpdate} villeUpdate={villeUpdate} paysUpdate={paysUpdate} verifNumber={verifNumber} commentsUpdate={commentsUpdate} informationUpdate={informationUpdate} sendSMS={sendSMS} canSubmit={canSubmit} submitButton={submitButton} /> }
            </section>
        </>
    );
  }
  
export default Form;
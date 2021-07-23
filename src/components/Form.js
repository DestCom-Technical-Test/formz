import {
    useState
} from "react";
import {
    v4 as uuidv4
} from 'uuid';
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
    const [nom, nomUpdate] = useState('')
    const [prenom, prenomUpdate] = useState('')
    const [rue, rueUpdate] = useState('')
    const [cp, cpUpdate] = useState('')
    const [ville, villeUpdate] = useState('')
    const [pays, paysUpdate] = useState('')
    const [phone, phoneUpdate] = useState('')
    const [comments, commentsUpdate] = useState('')
    const [information, informationUpdate] = useState(false)
    const [submitButton, submitButtonUpdate] = useState(false)
    const [birthDate, birthDateUpdate] = useState('')
    const [mail, mailUpdate] = useState('')
    const numberOfUser = []

    function sendSMS() {
        console.log(numberOfUser)
        ovh.request('GET', '/sms', function (err, serviceName) {
            if (err) {
                console.log(err, serviceName);
            } else {
                console.log('Success, account :', serviceName, 'is online');
                let userID = uuidv4();
                numberOfUser.push(phone)

                firebase.firestore().collection('datas').doc(userID).set({
                    'lastName': nom,
                    'firstName': prenom,
                    'mail': mail,
                    'birthDate': birthDate,
                    'adress': rue + ' ' + cp + ' ' + ville + ' ' + pays,
                    'comments': comments,
                });

                let message = window.location.protocol + '//www.' + window.location.host + '/result/' + userID + '/' + numberOfUser[0];

                ovh.request('POST', '/sms/' + serviceName + '/jobs/', {
                    message: message,
                    senderForResponse: true,
                    receivers: numberOfUser
                }, function (errsend, result) {
                    if (errsend) {
                        console.log('error:', errsend)
                        window.location = '/error/' + errsend;
                    } else {
                        window.location = '/success';
                    }
                })
            }
        })
    }

    function verifNumber(value) {
        /* eslint "no-control-regex": 0 */
        let phoneRegex = /^((\+)33)[1-9](\d{2}){4}$/
        if (phoneRegex.test(value)) {
            let valueChange = '';
            valueChange = value.replace('+', '00');
            phoneUpdate(valueChange);
            document.querySelector('.tel').classList.remove('false');
            document.querySelector('.tel').classList.add('good');
        } else {
            phoneUpdate('');
            document.querySelector('.tel').classList.remove('good');
            document.querySelector('.tel').classList.add('false');
        }
    }

    function canSubmit() {
        console.log(nom, prenom, rue, cp, ville, pays, phone)
        document.getElementById("checkbox").checked = false;
        if (nom !== (null || '') && prenom !== (null || '') && rue !== (null || '') && cp !== (null || '') && ville !== (null || '') && pays !== (null || '') && phone !== (null || '')) {
            submitButtonUpdate(true);
            document.querySelector('.warning').classList.add('hidden');
            document.getElementById("checkbox").checked = true;
        }
        else {
            submitButtonUpdate(false);
            document.querySelector('.warning').classList.remove('hidden');
            document.getElementById("checkbox").checked = false;
        }
    }

    return (
        <>
            <section id='form'>
            {information ? <Infos informationUpdate={informationUpdate} /> : <Input nomUpdate={nomUpdate} prenomUpdate={prenomUpdate} rueUpdate={rueUpdate} cpUpdate={cpUpdate} villeUpdate={villeUpdate} paysUpdate={paysUpdate} verifNumber={verifNumber} commentsUpdate={commentsUpdate} informationUpdate={informationUpdate} sendSMS={sendSMS} canSubmit={canSubmit} submitButton={submitButton} birthDateUpdate={birthDateUpdate} mailUpdate={mailUpdate} /> }
            </section>
        </>
    );
  }
  
export default Form;
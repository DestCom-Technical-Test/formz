//Imports
import {
    useState
} from "react";
import {
    v4 as uuidv4
} from 'uuid';
import firebase from "firebase/app";
import 'firebase/firestore';

import Input from "./Input";
import Infos from "./Infos";

import '../styles/Form.css';

var ovh = require('ovh')({
    appKey: process.env.REACT_APP_OVH_APP_KEY,
    appSecret: process.env.REACT_APP_OVH_APP_SECRET,
    consumerKey: process.env.REACT_APP_OVH_CONSUMER_KEY
})

function Form() {
    //Attente des inputs utilisateurs
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

    //Fonction d'envoi des données
    function sendSMS() {
        //Se connecte au service SMS
        ovh.request('GET', '/sms', function (err, serviceName) {
            if (err) {
                //arret si erreur
                return;
            } else {
                //Si connexion réussie
                //Crée un identifant unique
                let userID = uuidv4();
                //Ajoute le numero de telephone a la liste d'envoi
                numberOfUser.push(phone)

                //Enregistre les données
                firebase.firestore().collection('datas').doc(userID).set({
                    'lastName': nom,
                    'firstName': prenom,
                    'mail': mail,
                    'birthDate': birthDate,
                    'adress': rue + ' ' + cp + ' ' + ville + ' ' + pays,
                    'comments': comments,
                });

                //Crée le message qui va etre envoyer
                let message = window.location.protocol + '//' + window.location.host + '/result/' + userID + '/' + numberOfUser[0];

                //Envoi le message
                ovh.request('POST', '/sms/' + serviceName + '/jobs/', {
                    message: message,
                    senderForResponse: true,
                    receivers: numberOfUser
                }, function (errsend, result) {
                    if (errsend) {
                        //Si erreur le signal a l'utilisateur
                        window.location = '/error/' + errsend;
                    } else {
                        //Si succes le redirige vers une page de confirmation
                        window.location = '/success';
                    }
                })
            }
        })
    }

    //Fonction de verification de bon format du numero.
    function verifNumber(value) {
        /* eslint "no-control-regex": 0 */
        let phoneRegex = /^((\+)33)[1-9](\d{2}){4}$/ //Regex numero de telephone francais avec l'indicatif
        if (phoneRegex.test(value)) {
            let valueChange = '';
            valueChange = value.replace('+', '00');
            //reformatage du numero pour l'api OVH
            phoneUpdate(valueChange);
            document.querySelector('.tel').classList.remove('false');
            document.querySelector('.tel').classList.add('good');
        } else {
            //Si numéro non conforme remise a zéro de la valeur
            phoneUpdate('');
            document.querySelector('.tel').classList.remove('good');
            document.querySelector('.tel').classList.add('false');
        }
    }

    //Fonction d'activation de l'utilisation du bouton d'envoi
    function canSubmit() {
        document.getElementById("checkbox").checked = false;
        if (nom !== (null || '') && prenom !== (null || '') && rue !== (null || '') && cp !== (null || '') && ville !== (null || '') && pays !== (null || '') && phone !== (null || '')) {
            submitButtonUpdate(true);
            document.querySelector('.warning').classList.add('hidden');
            document.getElementById("checkbox").checked = true;
            return;
        } else {
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
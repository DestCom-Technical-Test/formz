//Imports
import firebase from "firebase/app";
import 'firebase/firestore';
import {
    useParams
} from "react-router-dom";
import {
    useEffect,
    useState
} from "react";

import ResultField from "./ResultField";
//Composant de loading (trouvé sur npm)
import Loader from "react-loader-spinner";

import "../styles/Results.css";
import '../styles/Form.css';



function Results() {
    //Recuperation des parametres
    const {
        phone,
        id
    } = useParams();

    const [reponse, reponseUpdate] = useState(null);
    const [displayData, displayDataUpdate] = useState(false);

    //Au premier rendu de la page recuperer les information adéquates
    useEffect(() => {
        let getData = firebase.firestore().collection('datas').doc(id);
        getData.get().then((doc) => {
            if (doc.exists) {
                reponseUpdate(doc.data());
                 //Si recuperation effectué, suppression des données sur le serveur et desactivation du loader
                firebase.firestore().collection('datas').doc(id).delete();
                displayDataUpdate(true);
            } else {
                //Si erreur redirection sur une page d'erreur
                window.location = '/error/data-erased'
            }
        })
        // eslint-disable-next-line
    }, [])


    return (
        <section id='results'>
            {displayData ? <ResultField reponse={reponse} phone={phone} /> : <Loader type="TailSpin" color="#3689d3" height={500} width={500} timeout={1000} className='loading' />}
            
        </section>
    )
}

export default Results;
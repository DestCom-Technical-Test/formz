import firebase from "firebase/app";
import 'firebase/firestore';
import {
    useParams
  } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/Form.css';
import ResultField from "./ResultField";
import "../styles/Results.css";
//Composant de loading (trouvé sur npm)
import Loader from "react-loader-spinner";


function Results(){
    const {
        phone, id 
      } = useParams();
   
    const [reponse, reponseUpdate] = useState(null);
    const [displayData, displayDataUpdate] = useState(false);

    useEffect(() =>{
        let getData = firebase.firestore().collection('datas').doc(id);
        getData.get().then((doc)=>{
            if(doc.exists){
                reponseUpdate(doc.data());
                firebase.firestore().collection('datas').doc(id).delete();
                displayDataUpdate(true);
            }
            else{
                console.log('The document does not exist');
                window.location =  '/error/data-erased'
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
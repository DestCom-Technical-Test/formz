import {
    useParams, 
    Link
  } from "react-router-dom";

  import '../styles/Error.css';

function Error(){
    const {
         status
      } = useParams();

    
    return (
        <section id='error'>
            <h1>Erreur : {status}</h1>
            <p>Cette erreur vous a été donnée car les données auquelle vous essayer d'acceder n'existent plus ou n'ont jamais existées.</p>
            <Link to='/'>Retourner au formulaire</Link>
        </section>
    )
}

export default Error;
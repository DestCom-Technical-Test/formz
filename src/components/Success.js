import {
  Link
} from "react-router-dom";

import '../styles/Error.css';

function Success() {
    return (
      <section id='success'>
            <h1>Surveillez votre téléphone !</h1>
            <p>Vous allez recevoir un SMS dans très peu de temps !</p>
            <Link to='/'>Retourner au formulaire</Link>
            <h2>A tout de suite !</h2>
        </section>
    );
  }
  
  export default Success;
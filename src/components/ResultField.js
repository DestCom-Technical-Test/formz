function ResultField({reponse, phone}){

    phone = phone.replace('00', '+');

    return (
        <>
            <h1>Merci de votre incription</h1>
            <p>Voici les informations que vous avez fournies :</p>
            <p>- Votre nom : {reponse.lastName}</p>
            <p>- Votre prénom : {reponse.firstName}</p>
            <p>- Votre adresse : {reponse.adress}</p>
            <p>- Votre numéro de téléphone : {phone}</p>
            <p>- Vos commentaires : {reponse.comments}</p>
            <h3>Notes :</h3>
            <ul>
                <li>Les données viennent d'etres supprimée du serveur (vous ne serez plus en mesure de réacceder a ces données).</li>
                <li>Votre numéro de téléphone n'a jamais été stocké sur le serveur.</li>
            </ul>
        </>
    )
}

export default ResultField;
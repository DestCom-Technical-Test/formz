function Infos({informationUpdate}){
    return(
        <>
            <h1>Informations</h1>
            <ul>
                <li>En utilisant ce site et envoyant le formulaire, vous consentez au stockage temporaire des informations entrées.</li>
                <li>Votre numéro de téléphone n'est quant à lui, jamais stocké sur le serveur.</li>
                <li>Les données entrées seront directement supprimée lors de la consultation de l'URL envoyée via SMS.</li>
                <li>Nous vous conseillons de ne pas entrée de véritable données dans ce site, à l'exception de votre numéro de téléphone (nécessaire au bon fonctionnement de la démonstration).</li>
                <li>Pour toute question, ou demande vous pouvez me contacter sur <a href='mailto:antoine.azevedo-da-silva@hetic.net'>antoine.azevedo-da-silva@hetic.net</a>.</li>
            </ul>
            <div className='buttons'>
                    <p onClick={()=>informationUpdate(false)}>Retour</p>
                </div>
        </>
    )
}

export default Infos;
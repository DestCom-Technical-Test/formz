function Input({nomUpdate, prenomUpdate, rueUpdate, cpUpdate, villeUpdate, paysUpdate, verifNumber, commentsUpdate, informationUpdate, sendSMS, canSubmit, submitButton, birthDateUpdate, mailUpdate} ){
    return (
        <>
        <h1>Merci de remplir ce formulaire</h1>
        <h3>Les champs notés d'un asterisque sont obligatoires.</h3>
        <input type='text' onChange={(e)=>nomUpdate(e.target.value)} placeholder='Nom*' required ></input>
        <input type='text' onChange={(e)=>prenomUpdate(e.target.value)} placeholder='Prénom*' required></input>
        <input type='mail' onChange={(e)=>mailUpdate(e.target.value)} placeholder='user@realhuman.com*' required pattern="^\S+@\S\S+\.\S+$"></input>
        <div>
            <input type='date' onChange={(e)=>birthDateUpdate(e.target.value)} min='1950-01-01' max='4000-12-12' required></input>
            <label>*</label>
        </div>
        <input type='tel' onChange={(e)=>verifNumber(e.target.value)} placeholder='Num. de télephone* (Format +33XXXXXXXXX)*' className='tel' required></input>
        <input type='text' onChange={(e)=>rueUpdate(e.target.value)} placeholder='Numéro et nom de rue*' required></input>
        <input type='text' onChange={(e)=>cpUpdate(e.target.value)} placeholder='Code Postal*' pattern="\d{2}[ ]?\d{3}" required></input>
        <input type='text' onChange={(e)=>villeUpdate(e.target.value)} placeholder='Ville*' required></input>
        <input type='text' onChange={(e)=>paysUpdate(e.target.value)} placeholder='Pays*' required></input>
        <textarea onChange={(e)=>commentsUpdate(e.target.value)} placeholder='Commentaires'>

        </textarea>
        <div className='consent'>
        <input type='checkbox' id='checkbox' onChange={(e)=> canSubmit()} required></input>
        <label>En cliquant sur cette case vous reconnaissez avoir pris connaissances des informations contenu dans le bouton "Infos." ci-dessous.</label>
        </div>
        <p className='warning hidden'>Merci de remplir corréctement les champs</p>
        <div className='buttons'>
                    <p onClick={()=>informationUpdate(true)}>Infos.</p>
                    {submitButton ? <p onClick={()=> sendSMS()} className='enabled'>Submit</p> : <p className='disabled'>Submit</p> }
                </div>
        </>)
}

export default Input;
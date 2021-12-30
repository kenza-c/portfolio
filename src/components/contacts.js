import "../css/contact.css"


const Contact=()=>{
    return(
        <div className="contact" id="contact">
            <h2>Contactez-moi</h2>
            <div className="contact-form">
                <p>Nom</p>
                <input/>
                <p>Prénom</p>
                <input/>
                <p>Sujet</p>
                <input/>
                <p>Email</p>
                <input/>
                <p>Description</p>
                <textarea>

                </textarea>
                <div>
                <button>Envoyer</button>
                <button>Annuler</button>
                </div>
            </div>
        </div>
    )
}
export default Contact;
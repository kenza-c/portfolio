import '../css/about.css'
import kenza from "../assets/kenza.jpg"

const About=()=>{
    return(
        <div className="about" id="about">
            <div className="img-container">
            <img src={kenza} className="photo" alt="kenza-legend"></img>
            </div>
            <div className="about-description">
                <h2>A propos moi</h2>
            <p>
                Étudiante motivée et passionnée par le monde de
                l'informatique, dotée d'une grande capacité d'adaptation,
                je sais me montrer proactive et digne de confiance dans la
                réalisation de mes missions. En quête de nouveaux
                challenges, je souhaite effectuer un stage de fin d'étude
                au sein d'une institution à laquelle je pourrais apporter
                mon dynamisme et mon gout du challenge.
            </p>
            </div>
        </div>
    )
}

export default About;
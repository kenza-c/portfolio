import '../css/navbar.css'

const Navbar=()=>{
    return(
        <div className="navbar">
            <h2>PORTFOLIO</h2>
            <ul>
                <li className="nav-list-item trans"><a href="#home">Acceuil</a></li>
                <li className="nav-list-item trans"><a href="#about">A propos</a></li>
                <li className="nav-list-item trans"><a href="#skills">Compétences</a></li>
                <li className="nav-list-item trans"><a href="#contact">Contactez-moi</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
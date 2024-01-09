import {Link} from "react-router-dom"

function NavBar(){
    return (
        <div style={{marginBottom:"2rem"}}>

            
            <Link to="/">Accueil</Link> <br />
            <Link to="/Apropos">Apropos</Link>
       
        </div>
    )
}
export default NavBar
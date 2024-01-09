import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar(){
    return (
        <div>
            <Link to="accueil">Accueil</Link>
            <Link to="Apropos">Apropos</Link>
        </div>
    )
}
export default NavBar
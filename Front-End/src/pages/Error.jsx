import { Link } from "react-router-dom";
import '../css/error.css'

function Error () {

    return (
        <div className="errorDiv">
            <h1>Aucune page n'a été trouvée</h1>
            <p className="errorIcone">404</p>
            <Link className="returnHome" to='/'>Cliquez ici pour revenir sur la page d'accueil</Link>
        </div>
    ) 
}
export default Error
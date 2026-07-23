import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import UserName from "../component/UserName"
import ButtonLogout from "../component/ButtonLogout"
import '../css/main.css'

function Header () {

    const token = useSelector((state) => state.user.token)

    return(
        <div>
        {
            token ? (<nav className="main-nav">
            <Link className="main-nav-logo" to="/user">
                <img
                    className="main-nav-logo-image"
                    src="/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="iconeHeader">
                <UserName className="userColor" /> 
                <Link to="/user" className="userColor"> <p><i className="fa-solid fa-circle-user icon"></i></p> </Link>
                <ButtonLogout />
        </div>
        </nav>) : (<nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
          </nav>)
        } 
        </div>
    )
}

export default Header
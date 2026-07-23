import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../features/UserSlice"

function ButtonLogout () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logout())
        navigate('/login')
    }

    return(
        <div>
            <button className="LogoutButton" onClick={handleClick}> <i className="fa-solid fa-power-off icon"></i> </button>
        </div>
    )
}

export default ButtonLogout
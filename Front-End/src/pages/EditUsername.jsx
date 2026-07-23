import React, {useEffect, useState, useContext} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../features/UserSlice'
import { changeName } from '../features/UserSlice'

const EditUsername = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const token = useSelector((state) => state.user.token)

    const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: ""
    })

    useEffect(() => {
        if(user) {
            setFormData(user)
        }
    }, [user])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevFormdata) => ({ ...prevFormdata, [name] : value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        

        try { 
            await dispatch(changeName(formData)).unwrap()
            alert(`Votre username a bien été changé`)

    } catch (error) {
        console.error(error)
    }
    }

    return (
        <div>
            <form className='editNameForm' onSubmit={handleSubmit} >
            <div className="input-wrapper2">
              <label htmlFor="userName">User Name : </label>
              <input
              className='inputForm' 
              type="text"
              id='userName'
              name="userName" 
              value={formData.userName}
              onChange={handleChange}
              />
            </div>

            <div className="input-wrapper2">
              <label htmlFor="firstName">First Name : </label>
              <input 
              className='inputForm inputDisabled' 
              type="text"
              id='firstName'
              name="firstName" 
              value={formData.firstName}
              disabled
              />
            </div>

            <div className="input-wrapper2">
              <label htmlFor="lastName">Last Name : </label>
              <input 
              className='inputForm inputDisabled' 
              type="text"
              id='lastName'
              name="lastName" 
              value={formData.lastName}
              disabled
              />
            </div>

            <div className='buttonSubmit'>
                <button 
                className="sign-in-button"
                type="submit"
                > Save
                </button>
                <Link to="/user" className="sign-in-button">
                    Cancel
                </Link>
            </div>
          </form>
        </div>
    )
}
export default EditUsername
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToken, fetchUser } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/userSlice'

const SimpleForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
      email : "",
      password : "",
    })

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData((prevFormData) => ({ ...prevFormData, [name] : value }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      try{
          await dispatch(loginUser(formData)).unwrap()
          navigate("/user") 

        setFormData({
            email : "",
            password : "",
        })

      } catch (error) {
        console.error(error)
      }
    }

  return (
    <form onSubmit={handleSubmit} >
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input 
              type="text"
              id='email'
              name="email" 
              value={formData.email}
              onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
              type="password"
              name="password"
               id="password" 
               value={formData.password}
               onChange={handleChange}
               />
            </div>

            <div className="input-remember">
              <input 
              type="checkbox" 
              id="remember-me"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button 
            className="sign-in-button"
            type="submit"
            >
                Sign In</button>
          </form>
    )
}

export default SimpleForm
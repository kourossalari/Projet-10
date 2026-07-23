import React, { useEffect } from 'react'
import '../App.css'
import { Routes, Route } from 'react-router-dom'
import { Provider, useSelector,useDispatch } from 'react-redux'
import { store } from '../app/Store'

import Home from "../pages/Home"
import Login from '../pages/Sign-in'
import User from '../pages/User'
import DetailContent from '../pages/DetailContent'
import Error from '../pages/Error'
import UserChange from '../pages/UserChange'
import Layout from '../layout/Layout'
import { fetchUser } from '../features/UserSlice'
import ProtectedRoute from './ProtectedRoute'

function AppContent() {
    
    const dispatch = useDispatch()
    const token = useSelector((state) => state.user.token)

    useEffect (() => {    
        if(token) {
        dispatch(fetchUser(token))
        }
    }, [token, dispatch])

  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoute />} >
          <Route path='/user' element={<User />} />
          <Route path='/editUserName' element={<UserChange />} />
          <Route path='/detailContent' element={<DetailContent />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
  )
}

export default AppContent
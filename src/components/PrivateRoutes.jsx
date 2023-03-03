import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const profileData = JSON.parse(localStorage.getItem('profile'))

  return profileData ? <Outlet/> : <Navigate to="/login"/> 
}

export default PrivateRoutes
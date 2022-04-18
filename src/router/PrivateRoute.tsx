import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { home, login } from './routePaths'

export default function PrivateRoute({isLogged}:any) {
  return isLogged ? <Outlet /> : <Navigate to ={login} />
  
}

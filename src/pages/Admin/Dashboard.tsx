import React from 'react'
import Sidebar from '../../components/common/SideBar/SideBar'
import AdminRouter from './Router/PrivateRoutes'



export default function Dashboard() {
  return (
    <Sidebar>
      <AdminRouter/>
    </Sidebar>
  )
}

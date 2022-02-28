import { Fragment } from 'react'
import React from 'react'
import './main-layout.scss'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

   return (
      <Fragment>
         <TopNav />
         <Sidebar />
         <div className='main'>
            <div className="main__content">
               <Outlet />
            </div>
         </div>
      </Fragment>
   )
}

export default MainLayout
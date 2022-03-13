import { Fragment, useEffect } from 'react'
import React from 'react'
import './main-layout.scss'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useSelector } from 'react-redux'

const MainLayout = () => {
   let { auth } = useAuth()
   let profile = useSelector(state => state.user.profile)
   return (
      <Fragment>
         <TopNav auth={auth ? auth : profile} />
         <Sidebar auth={auth ? auth : profile} />
         <div className='main'>
            <div className="main__content">
               <Outlet />
            </div>
         </div>
      </Fragment>
   )
}

export default MainLayout
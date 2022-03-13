import {  useEffect, useState } from 'react'
import './sidebar.scss'
import ExitIcon from '@mui/icons-material/ExitToApp'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import sidebarNav from '../../configs/sidebarNav'
import { useDispatch } from 'react-redux'
import userSidebarNav from '../../configs/userSidebarNav'
import Logo from '../../assets/images/logo.jpg'
import { Switch } from '@mui/material'
import { logout } from '../../redux/actions/user.actions'
const Sidebar = ({ auth }) => {
   const [activeIndex, setActiveIndex] = useState(0)

   const navigate = useNavigate()
   const dispatch = useDispatch()



   const handleSignOut = () => {
      let okHandle = window.confirm('Bạn có muốn đăng xuất không !')
      if (okHandle) {
         dispatch(logout(navigate))
      }
   }
   const location = useLocation()


   useEffect(() => {
      if (auth.role === 'Quản trị viên') {
         let currentPath = location.pathname.split('/')[2]
         const activeItem = sidebarNav.findIndex(item => item.section === currentPath)
         setActiveIndex(currentPath.length === 0 ? 0 : activeItem)
      }
      else if (auth.role === 'Người dùng') {
         let currentPath = location.pathname.split('/')[3]
         const activeItem = userSidebarNav.findIndex(item => item.section === currentPath)
         setActiveIndex(currentPath ? activeItem : 0)
      }
   }, [activeIndex, location,auth])



   return (
      <div className='sidebar'>
         <div className='sidebar__logo'>
            <img src={Logo} alt='logo' />
            <div className='sidebar__switch'>
               <Switch defaultChecked />
            </div>
         </div>
         <div className="sidebar__menu">
            {auth.role === 'Quản trị viên' ?
               sidebarNav.map((nav, index) => (
                  <Link to={nav.link} key={`nav-${index}`}
                     className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                     <div className="sidebar__menu__item__icon">
                        {nav.icon}
                     </div>
                     <div className="sidebar__menu__item__txt">
                        {nav.text}
                     </div>
                  </Link>
               ))
               : userSidebarNav.map((nav, index) => (
                  <Link to={nav.link} key={`nav-${index}`}
                     className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                     <div className="sidebar__menu__item__icon">
                        {nav.icon}
                     </div>
                     <div className="sidebar__menu__item__txt">
                        {nav.text}
                     </div>
                  </Link>
               ))
            }
            <div className="sidebar__menu__item" onClick={handleSignOut}>
               <div className="sidebar__menu__item__icon">
                  <ExitIcon />
               </div>
               <div className="sidebar__menu__item__txt">
                  Đăng xuất
               </div>
            </div>
         </div>
      </div >
   )
}

export default Sidebar
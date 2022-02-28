import { useContext, useEffect, useState } from 'react'
import './sidebar.scss'
import ExitIcon from '@mui/icons-material/ExitToApp'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import sidebarNav from '../../configs/sidebarNav'
import { useDispatch, useSelector } from 'react-redux'
import userSidebarNav from '../../configs/userSidebarNav'
import Logo from '../../assets/images/logo.jpg'
import { Switch } from '@mui/material'
import { logout } from '../../redux/actions/user.actions'
const Sidebar = () => {
   const [activeIndex, setActiveIndex] = useState(0)
   const profile = useSelector(state => state.user.profile)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const handleSignOut = (navigate) => {
      dispatch(logout())
   }
   const location = useLocation()
   useEffect(() => {
      const currentPath = location.pathname.split('/')[2]
      const activeItem = sidebarNav.findIndex(item => item.section === currentPath)
      setActiveIndex(currentPath.length === 0 ? 0 : activeItem)
   }, [location])
   return (
      <div className='sidebar'>
         <div className='sidebar__logo'>
            <img src={Logo} alt='logo' />
            <div className='sidebar__switch'>
               <Switch defaultChecked />
            </div>
         </div>
         <div className="sidebar__menu">
            {profile.role === 'Quản trị viên' ? sidebarNav.map((nav, index) => (
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
            <div className="sidebar__menu__item" onClick={() => navigate('/login')}>
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
import { useContext, useState } from 'react'
import { ExitToApp, Settings } from '@mui/icons-material'
import './user-info.scss'
import { Avatar, Menu, MenuItem, ListItemIcon, IconButton } from '@mui/material'
const UserInfo = ({ user }) => {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <div className='user-info'>
         <div className="user-info__name">
            <p>Tên nhân viên</p>
         </div>
         <div className="user-info__img">
            <IconButton
               onClick={handleClick}
               size='large'
               sx={{ ml: 2 }}
               aria-controls={open ? 'account-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
            >
               <Avatar sx={{ width: 45, height: 45, border: "2px solid #008E83" }}>T</Avatar>
            </IconButton>
            <Menu
               anchorEl={anchorEl}
               id="account-menu"
               open={open}
               onClose={handleClose}
               onClick={handleClose}
               PaperProps={{
                  elevation: 0,
                  sx: {
                     overflow: 'visible',
                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                     },
                     '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                     },
                  },
               }}
               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
               <MenuItem>
                  <ListItemIcon>
                     <Settings fontSize="small" />
                  </ListItemIcon>
                  Cài đặt
               </MenuItem>
               <MenuItem>
                  <ListItemIcon>
                     <ExitToApp fontSize="small" />
                  </ListItemIcon>
                  Đăng xuất
               </MenuItem>
            </Menu>
         </div>


      </div>
   )
}

export default UserInfo
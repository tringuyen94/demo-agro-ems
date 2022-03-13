import { AssignmentInd, Settings, Tungsten, WaterDamage } from '@mui/icons-material';

const userSidebarNav = [
   {
      section: 'cai-dat',
      link: '/user/cai-dat',
      icon: <Settings />,
      text: 'Cài đặt'
   },
   {
      section: 'chi-so-dien',
      link: '/user/ghi-chi-so/chi-so-dien',
      icon: <Tungsten />,
      text: 'Chỉ số Điện'
   },
   {
      section: 'chi-so-nuoc',
      link: '/user/ghi-chi-so/chi-so-nuoc',
      icon: <WaterDamage />,
      text: 'Chỉ số Nước'
   },

]

export default userSidebarNav
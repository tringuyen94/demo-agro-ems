import { People as PeopleIcon,
    Apartment as ApartmentIcon,
    EventSeat as EventSeatIcon,
    BarChart as BarChartIcon,
    Settings as SettingsIcon
} from "@mui/icons-material"

const sidebarNav = [
    {
        section:'nhan-vien',
        link: '/admin/nhan-vien',
        icon: <PeopleIcon />,
        text: 'Nhân viên'
    },
    {
        section:'bo-phan',
        link: '/admin/bo-phan',
        icon: <ApartmentIcon/>,
        text: 'Bộ phận'
    },
    {
        section:'chuc-vu',
        link: '/admin/chuc-vu',
        icon: <EventSeatIcon/>,
        text: 'Chức vụ'
    },
    {
        section:'thong-ke',
        link: '/admin/thong-ke',
        icon: <BarChartIcon/>,
        text: 'Thống kê'
    },
    {   
        section:'cai-dat',
        link: '/admin/cai-dat',
        icon: <SettingsIcon/>,
        text: 'Cài đặt'
    }
]

export default sidebarNav
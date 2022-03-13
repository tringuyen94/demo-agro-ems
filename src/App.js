import './scss/App.scss';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import Login from './screens/Login';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import MainLayout from './layout/MainLayout';
import Employee from './screens/AdminPage/Employee';
import Department from './screens/AdminPage/Department';
import Position from './screens/AdminPage/Position';
import Statistical from './screens/AdminPage/Statistical';
import AdminSetting from './screens/AdminPage/AdminSetting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserSetting from './screens/UserPage/UserSetting';
import AuthProvider from './context/AuthProvider';
import MeterList from './screens/UserPage/MeterList';
import MeterDetail from './screens/UserPage/MeterList/MeterDetail';

function App() {
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        hideProgressBar
        reverseOrder={false} />
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path='/admin/nhan-vien' element={<Employee />} />
            <Route path='/admin/bo-phan' element={<Department />} />
            <Route path='/admin/chuc-vu' element={<Position />} />
            <Route path='/admin/thong-ke' element={<Statistical />} />
            <Route path='/admin/cai-dat' element={<AdminSetting />} />
            <Route path='/user/cai-dat' element={<UserSetting />} />
            <Route path='/user/ghi-chi-so/:type' element={<MeterList />} />
            <Route path='/user/ghi-chi-so/:type/:ido' element={<MeterDetail />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Fragment >
  );
}

export default App;

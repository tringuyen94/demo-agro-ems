import './scss/App.scss';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import Login from './screens/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Fragment, useEffect } from 'react';
import Employee from './screens/AdminPage/Employee';
import Department from './screens/AdminPage/Department';
import Position from './screens/AdminPage/Position';
import Statistical from './screens/AdminPage/Statistical';
import AdminSetting from './screens/AdminPage/AdminSetting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserPage from './screens/UserPage';
import UserSetting from './screens/UserPage/UserSetting';


function App() {

  useEffect(() => {
  }, [])
  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        hideProgressBar
        reverseOrder={false} />
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<MainLayout />}>
              <Route index path='/admin/nhan-vien' element={<Employee />} />
              <Route path='/admin/bo-phan' element={<Department />} />
              <Route path='/admin/chuc-vu' element={<Position />} />
              <Route path='/admin/thong-ke' element={<Statistical />} />
              <Route path='/admin/cai-dat' element={<AdminSetting />} />
            </Route>
            <Route path='/' element={<MainLayout />}>
              <Route index path='/user/ho-so-nhan-vien' element={<UserPage />} />
              <Route path='/user/cat-dat' element={<UserSetting />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </Fragment >
  );
}

export default App;

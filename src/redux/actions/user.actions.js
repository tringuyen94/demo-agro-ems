import UserServices from "../../services/user.service"
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./types.actions"
import { toast, } from "react-toastify"
import jwtDecode from "jwt-decode"
export const login = (credential, navigate) => {
   return dispatch => {
      UserServices.login(credential)
         .then(res => {
            let profile = jwtDecode(res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: profile })
            toast.success(res.data.message)
            if (profile.role === 'Quản trị viên') return navigate('/admin/nhan-vien')
            else if (profile.role === 'Người dùng') return navigate('/user/cai-dat')
         })
         .catch(err => {
            dispatch({ type: LOGIN_FAILED })
            toast.error(err.response.data)
         })
   }
}

export const logout = (navigate) => {
   return dispatch => {
      dispatch({ type: LOGOUT })
      toast.info('Hẹn gặp lại !!')
      navigate('/login')
   }
}

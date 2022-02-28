import './login.scss'
import Logo from '../../assets/images/logo.jpg'
import { Button, FormControl, FormGroup, FormHelperText, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/user.actions'


const Login = () => {
   document.title = 'Đăng nhập'
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         username: '',
         password: ''
      },
      validationSchema: Yup.object({
         username: Yup.string()
            .matches(/^[a-zA-Z0-9_.-]*$/, 'Không chứa ký tự đặc biệt')
            .required("Không được bỏ trống"),
         password: Yup.string()
            .min(6, "Ít nhất có 6 ký tự")
            .required("Không được bỏ trống"),
      }),
      onSubmit: values => dispatch(login(values, navigate))
   })

   return (
      <div className="login">
         <FormGroup className='login__form' onSubmit={formik.handleSubmit}>
            <div className='login__form-top'>
               <img src={Logo} alt="logo" className='logo' />
               <p>Đăng nhập</p>
            </div>
            <FormControl style={{ marginTop: "15px" }}>
               <TextField name="username"
                  value={formik.values.username}
                  label='Tên đăng nhập'
                  onChange={formik.handleChange} />
               {formik.errors.username && formik.touched.username &&
                  (<FormHelperText error>{formik.errors.username}</FormHelperText>)
               }
            </FormControl>
            <FormControl style={{ marginTop: "15px" }} >
               <TextField name="password"
                  value={formik.values.password}
                  label="Mật khẩu" type="password"
                  onChange={formik.handleChange}
               />
               {formik.errors.password && formik.touched.password &&
                  (<FormHelperText error>{formik.errors.password}</FormHelperText>)
               }
            </FormControl>
            <FormControl style={{ marginTop: "20px" }}>
               <Button variant='contained'
                  onClick={formik.handleSubmit}>Đăng nhập</Button>
            </FormControl>
         </FormGroup>
      </div>
   )
}

export default Login
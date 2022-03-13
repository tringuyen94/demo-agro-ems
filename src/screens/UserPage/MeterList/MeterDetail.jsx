import { ArrowBack } from "@mui/icons-material"
import { Button, FormControl, FormGroup, Grid, TextField } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ElectricMeter, WaterMeter } from "../../../constants/Data"
import getType from "../../../utils/getTypeMeter"
import './meter-detail.scss'

const MeterDetail = () => {
   const params = useParams()
   const [meter, setMeter] = useState()
   const navigate= useNavigate()


   useEffect(() => {
      if (getType(params.type) === 'electric') {
         ElectricMeter.find(item => {
            if (item.name === params.ido) {
               setMeter(item)
            }
         })
      }
      else if (getType(params.type) === 'water') {
         WaterMeter.find(item => {
            if (item.name === params.ido) {
               setMeter(item)
            }
         })
      }
   }, [params])

   return (
      <Fragment>
         <div className="meter-detail-top">
            <Button onClick={()=>navigate(-1)}><ArrowBack />&nbsp;  Quay lại</Button>
         </div>
         <Grid container className="meter-detail">
            {meter &&
               <Grid item md={6} xs={12}>
                  <FormControl margin="dense" fullWidth>
                     <TextField label="Tên ô vựa" value={meter.name} disabled />
                  </FormControl>
                  <FormControl margin="dense" fullWidth>
                     <TextField label="Tên khách hàng" value={meter.owner} disabled />
                  </FormControl>
                  <FormControl margin="dense" fullWidth>
                     <TextField label="Chỉ số cũ" value={meter.oldElectricIndex} disabled />
                  </FormControl>
                  <FormControl margin="dense" fullWidth>
                     <TextField label="Chỉ số mới" placeholder="Nhập chỉ số mới" />
                  </FormControl>
                  <FormControl margin="dense" fullWidth>
                     <TextField label="Mức sử dụng" disabled />
                  </FormControl>
                  <FormControl margin="dense" fullWidth>
                     <TextField label="Đơn giá" value={meter.price} />
                  </FormControl>
                  <h2>Tổng tiền: </h2>
                  <Button style={{marginTop:"1rem"}}  variant="contained">In hóa đơn</Button>
               </Grid>
            }
         </Grid>
      </Fragment>

   )
}

export default MeterDetail
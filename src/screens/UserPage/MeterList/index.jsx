import { Fragment, useEffect, useState } from "react";
import { NativeSelect, InputLabel, Grid, TextField } from "@mui/material"
import { ElectricMeter, WaterMeter } from "../../../constants/Data";
import './meter-list.scss'
import MeterListItem from "./MeterListItem";
import { useParams } from "react-router-dom";
import { Search } from "@mui/icons-material";
import getType from "../../../utils/getTypeMeter";
const MeterList = () => {
   document.title = 'Danh sách đồng hồ'

   const [area, setArea] = useState("A")

   const [meterType, setMeterType] = useState('electric')
   const params = useParams()
   const handleChangeArea = (e) => {
      setArea(e.target.value)
   }
   useEffect(() => {
      setMeterType(getType(params.type))
   }, [params])
   if (meterType === 'electric') return (
      <div className='location-list'>
         <Grid container className="location-list-filter">
            <Grid item md={4} className="location-area">
               <InputLabel variant="standard" htmlFor="select-area">
                  Chọn khu vực
               </InputLabel>
               <NativeSelect
                  value={area}
                  inputProps={{
                     id: 'select-area',
                  }}
                  onChange={handleChangeArea}
               >
                  <option value="A">Nhà lồng A</option>
                  <option value="B">Nhà lồng B</option>
                  <option value="C">Nhà lồng C</option>
               </NativeSelect>
            </Grid>

            <Grid item md={4} className="location-info">
               <div>
                  <h1>Điện</h1>
                  <p> Đã ghi : <span>0</span></p>
                  <p> Còn lại : <span>0</span></p>
               </div>
            </Grid>
            <Grid item md={4} className="location-search">
               <TextField placeholder='Nhập ô cần tìm' variant="standard" />
               <Search />
            </Grid>
         </Grid>
         <Grid container className="location-list-wrapper">
            {ElectricMeter.map((item, index) => (
               <MeterListItem key={index} item={item} />
            ))}
         </Grid>
      </div>
   )
   else if (meterType === 'water') return (
      <div className='location-list'>
         <Grid container className="location-list-filter">
            <Grid item md={4} className="location-area">
               <InputLabel variant="standard" htmlFor="select-area">
                  Chọn khu vực
               </InputLabel>
               <NativeSelect
                  value={area}
                  inputProps={{
                     id: 'select-area',
                  }}
                  onChange={handleChangeArea}
               >
                  <option value="C">Nhà lồng C</option>
                  <option value="K">Kiosque</option>
               </NativeSelect>
            </Grid>

            <Grid item md={4} className="location-info">
               <div>
                  <h1>Nước</h1>
                  <p>Đã ghi : <span>0</span></p>
                  <p> Còn lại : <span>0</span></p>
               </div>
            </Grid>
            <Grid item md={4} className="location-search">
               <TextField placeholder='Nhập ô cần tìm' variant="standard" />
               <Search />
            </Grid>
         </Grid>
         <Grid container className="location-list-wrapper">
            {WaterMeter.map((item, index) => (
               <MeterListItem key={index} item={item} />
            ))}
         </Grid>
      </div>
   )
}
export default MeterList
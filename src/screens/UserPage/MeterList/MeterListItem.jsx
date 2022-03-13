import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import ElectricMeter from '../../../assets/images/electric-meter.png'
import WaterMeter from '../../../assets/images/water-meter.png'
import getType from "../../../utils/getTypeMeter"


const MeterListItem = ({ item }) => {
   const [meterType, setMeterType] = useState('electric')
   const params = useParams()
   const location =useLocation()
   const navigate = useNavigate()
   const handleNavigate= ()=>{
      navigate(`${location.pathname}/${item.name}`)
   }

   useEffect(() => {
      setMeterType(getType(params.type))
   }, [params])
   return (
      <Grid item md={2} className='location-item' onClick={handleNavigate} >
         <div className='location-item__icon'>
            {meterType === 'electric' ?
               <img src={ElectricMeter} alt="electricmeter" />
               :
               <img src={WaterMeter} alt="watermeter" />
            }
         </div>
         <p className='location-item__name'>{item.name}</p>
      </Grid>
   )
}
export default MeterListItem
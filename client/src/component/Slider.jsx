import React, {  useEffect, useState } from 'react'
import './slider.css'

import slider1 from './../image/slider1.png'
import slider2 from './../image/slider2.jpg'
import slider3 from './../image/slider3.jpg'
const img = [slider1,slider2,slider3]

const counter = function (m) { 
    if (m > 0 && m < 3) {
        m= m + 1
    } else {
        m= 1
    }
  
  return  m  
    
}



function Slider() {
    const [count, setM] = useState(1)
    
    useEffect( () => {    setInterval(() => { setM((count) => counter(count)) }, 90000) }, [])
   
    const slid = img[count-1] 
      
// useEffect(()=>{setInterval(()=>{counter(1)},3000)})



  return (
      <div className='slider'>
          <img src={slid} alt="slider"  className='slider'/>
          hello
    </div>
  )
}

export default Slider
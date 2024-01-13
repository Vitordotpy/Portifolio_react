import React from 'react'
import { gif } from '../../assets'

const StarsCanvas = () =>{
  return(
  <div className='w-full h-full absolute inset-0 z-[-1]' style={{
    backgroundImage: `url(${gif})`
  }}>

  </div>)
}

export default StarsCanvas
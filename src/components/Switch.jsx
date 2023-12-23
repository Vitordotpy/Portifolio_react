import React from 'react'
import { useState } from 'react';
import { ptbr, enus } from '../assets';
import { texts } from '../constants';


function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-6";
  return (
        <div className='grow flex-row justify-center'>
      <div className="w-14 h-7 flex flex-col items-center">
        <div
          className="w-14 h-7 w-12 h-6 flex items-center bg-secondary rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div
            className={
              "bg-white md:w-6 md:h-6 h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          >
            <img  src={toggle?ptbr:enus} className='object-fill'/>
          </div>
        </div>
        <span className='type-text text-secondary text-1rem font-medium relative m-2'>{toggle?texts['languagept']:texts['languageen']}</span>
      </div>
      </div>
    

  );
}

export default Switch;
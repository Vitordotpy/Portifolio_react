import React from 'react'
import { ptbr, enus } from '../assets';
import { texts } from '../constants';
import { useLanguage } from './context/LanguageContext';


function Switch() {
  const {language, toggleLanguage} = useLanguage();
  
  const toggleClass = " transform translate-x-6";
  return (
   
      <div className="w-14 h-10 flex flex-col items-center ">
        <div
          className="w-14 h-7 flex items-center bg-secondary rounded-full p-1 cursor-pointer"
          onClick={toggleLanguage}
        >

            <img  src={language?ptbr:enus} alt={language?"ptbr":"enus"} className={"h-[24.5px] w-[24.5px] rounded-full shadow-md transform duration-300 ease-in-out" + (language ? null : toggleClass)} />

        </div>
        <span className='type-text text-secondary text-1rem font-medium relative m-1 hidden md:block'>{language?texts['languagept']:texts['languageen']}</span>
      </div>
      
    

  );
}

export default Switch;
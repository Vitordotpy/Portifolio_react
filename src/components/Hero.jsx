import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';

import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';
import { perfil } from '../assets';

const Hero = () => {
  const {language} = useLanguage();
  return (
    <section className='relative h-screen w-full mx-auto'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-cian'/>
          <div className='w-1 sm:h-80 h-40 purple-cian-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>{language?texts['hellopt']:texts['helloen']}<span className='purple-cian-text-gradient'>Vitor</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>{language?texts['jobpt']:texts['joben']}</p>
          <img src={perfil} alt='hero' className='w-[200px] h-[200px] rounded-full object-cover mt-[16px]'/>
          
        </div>
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <p className='mb-2 w-[35px] flex justify-center text-[14px] font-bold items-center text-center' style={{ lineHeight: '14px'}}>{language?texts['scrolldownpt']:texts['scrolldownen']}</p>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}} className="w-3 h-3 rounded-full bg-white mb-1"/>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero
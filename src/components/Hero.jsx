import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';

import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';
import { perfil } from '../assets';

const Hero = () => {
  const { language } = useLanguage();
  return (<div>
    <section className='relative h-screen w-full mx-auto'>
    
      <div className='stars' />
      <div className='twinkling' />
      <div className='clouds' />
      <div className='absolute inset-0 w-full h-[2px] purple-cian-gradient top-[80px]' />
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 flex flex-row items-start gap-5 sm:max-h-[360px] max-h-[332px]`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-cian' />
          <div className='w-1 sm:h-80 h-[17rem]  purple-cian-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>{language ? texts['hellopt'] : texts['helloen']}<span className='purple-cian-text-gradient'>Vitor</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>{language ? texts['jobpt'] : texts['joben']}</p>
          <div className='w-max mt-[16px]'>
             <img src={perfil} alt='hero' className='lg:h-[190px] lg:w-[190px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[200px] h-[200px]   rounded-full object-cover' />
          </div>
        </div>
      </div>


      <div className="absolute bottom-0 w-full flex justify-center items-center flex-col">
        <a href="#about">
          <p className='mb-2 w-[35px] flex justify-center text-[14px] font-bold items-center text-center' style={{ lineHeight: '14px' }}>{language ? texts['scrolldownpt'] : texts['scrolldownen']}</p>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mb-10">
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-white mb-1" />
          </div>
        </a>
        <div className='w-full h-[2px] purple-cian-gradient bottom-0' />
      </div>


    </section>
  </div>
    
  )
}

export default Hero
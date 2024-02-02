import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';

//Card de overview
const TechCard = ({ index, name, icon }) => {
  return (<Tilt className=" w-[130px]" options={{ max: 5, scale: 1.05, speed: 450 }}>
    <motion.div variants={fadeIn("right", "spring", 0.25 * index, 0.50)} className='w-full red-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[130px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={name} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center' >{name}</h3>
      </div>
    </motion.div>
  </Tilt>)
}

const About = () => {
  const {language} = useLanguage();
  return (
    <>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <span className='hash-span' id={'about'}>&nbsp;</span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language?texts['overviewheaderpt']:texts['overviewheaderen']}</p>
        <h2 className={styles.sectionHeadText}>{language?texts['overviewpt']:texts['overviewen']}</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
        {language?texts['overtextpt']:texts['overtexten']}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((tech, index) => (<TechCard key={tech.name} index={index} {...tech} />))}

      </div>
      </div>
    </>
  )
}

export default About;
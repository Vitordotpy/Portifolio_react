import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';

//Card de overview
const TechCard = ({ index, name, icon }) => {
  return (<Tilt className="xs:w-[150px] w-full" options={{ max: 5, scale: 1.05, speed: 450 }}>
    <motion.div variants={fadeIn("right", "spring", 0.25 * index, 0.50)} className='w-full red-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        className='bg-tertiary rounded-[1.25rem] py-5 px12 min-h-[150px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={name} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[1.25rem] font-bold text-center' >{name}</h3>
      </div>
    </motion.div>
  </Tilt>)
}

const About = () => {
  const {language} = useLanguage();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language?texts['overviewheaderpt']:texts['overviewheaderen']}</p>
        <h2 className={styles.sectionHeadText}>{language?texts['overviewpt']:texts['overviewen']}</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
        {language?texts['overtextpt']:texts['overtexten']}
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((tech, index) => (<TechCard key={tech.name} index={index} {...tech} />))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
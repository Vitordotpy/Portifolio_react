import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
//Card de overview
const ServiceCard = ({ index, title, icon }) => {
  return (<Tilt className="xs:w-[250px] w-full" options={{ max: 5, scale: 1.05, speed: 450 }}>
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        className='bg-tertiary rounded-[1.25rem] py-5 px12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[1.25rem] font-bold text-center' >{title}</h3>
      </div>
    </motion.div>
  </Tilt>)
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
        I thrive on challenges and constantly seek opportunities to
        expand my skill set. My journey in the world of software
        engineering has equipped me with a solid foundation in various
        programming languages, software development methodologies,
        and a knack for problem-solving. I am deeply committed to
        delivering high-quality, scalable, and efficient software solutions
        that leave a lasting impact.
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
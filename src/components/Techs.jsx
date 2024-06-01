import React from 'react';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt'
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { useLanguage } from './context/LanguageContext';
import { styles } from '../styles';
import { texts } from '../constants';

//Card de overview
const TechCard = ({ index, name, icon }) => {
    return (<Tilt className=" w-[130px]" options={{ max: 5, scale: 1.05, speed: 450 }}>
        <motion.div variants={fadeIn("right", "spring", 0.25 * index, 0.50)} className='w-full purple-cian-gradient p-[1px] rounded-[20px] shadow-card'>
            <div
                className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[130px] flex justify-evenly items-center flex-col'
            >
                <img src={icon} alt={name} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center' >{name}</h3>
            </div>
        </motion.div>
    </Tilt>)
}

const Techs = () => {
    const { language } = useLanguage();
    return (
        <>
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 sm:block hidden`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>{language ? texts['techsheaderpt'] : texts['techsheaderen']}</p>
                    <h2 className={styles.sectionHeadText}>{language ? texts['techspt'] : texts['techsen']}</h2>
                </motion.div>

                <div className='mt-20 flex flex-wrap gap-10'>
                    {technologies.map((tech, index) => (<TechCard key={tech.name} index={index} {...tech} />))}
                </div>
            </div>

        </>
    );
}

export default SectionWrapper(Techs, 'techs');
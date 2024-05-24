import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';



const About = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span' id={'about'}>&nbsp;</span>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{language ? texts['overviewheaderpt'] : texts['overviewheaderen']}</p>
          <h2 className={styles.sectionHeadText}>{language ? texts['overviewpt'] : texts['overviewen']}</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]">
          {language ? texts['overtextpt'] : texts['overtexten']}
        </motion.p>
      </div>
    </>
  )
}

export default About;
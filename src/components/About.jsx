import React from 'react'

import { styles } from '../styles';
import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';



const About = () => {
  const { language } = useLanguage();
  return (
    <>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className='hash-span' id={'about'}>&nbsp;</span>

          <p className={styles.sectionSubText}>{language ? texts['overviewheaderpt'] : texts['overviewheaderen']}</p>
          <h2 className={styles.sectionHeadText}>{language ? texts['overviewpt'] : texts['overviewen']}</h2>

        <div
          className="mt-4 text-white text-[17px]
      max-w-3xl leading-[30px]">
          {language ? texts['overtextpt'] : texts['overtexten']}
        </div>
      </div>
    </>
  )
}

export default About;
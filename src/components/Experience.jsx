import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { color, motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiencesen, experiencespt } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';

const ExperienceCard = ({ experience }) => (<VerticalTimelineElement
  contentStyle={{ background: '#141414', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid #232631' }}
  date={experience.date}
  iconStyle={{ background: experience.iconBg}}
  icon={<div className='flex justify-center items-center w-full h-full'>
    <img
      src={experience.icon}
      alt={experience.company_name}
      className='w-[60%] h-[60%] object-contain'
    />
  </div>}>
    
  <div>
    <h3 className='purple-cian-text-gradient text-[1.5rem] font-bold'>{experience.title}</h3>
    <p className='text-secondary text-[1rem] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
  </div>
  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {experience.points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[0.8rem] pl-1 tracking-wider'
      >
        {point}

      </li>
    ))}
  </ul>
</VerticalTimelineElement>
)

const Experience = () => {
  const {language} = useLanguage();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {language?texts['workheaderpt']:texts['workheaderen']}
        </p>
        <h2 className={styles.sectionHeadText}>
        {language?texts['workexppt']:texts['workexpen']}
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          { (language ? experiencespt: experiencesen).map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work');
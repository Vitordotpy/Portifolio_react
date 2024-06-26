import React from 'react'
import {Tilt} from 'react-tilt';

import { styles } from '../styles';
import { projectspt, projectsen } from '../constants';
import { SectionWrapper } from '../hoc';
import { to_source } from '../assets';
import { useLanguage } from './context/LanguageContext';
import { texts } from '../constants';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
        <Tilt options={{max:5, scale:1.05, speed: 450}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open(source_code_link, "_blank")} className='bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={to_source} alt='to source' className='w-1/2 h-1/2 object-contain' />

              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[1.5rem]'>
              {name}
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </h3>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>))}
          </div>
        </Tilt>
  )
}

const Works = () => {
  const {language} = useLanguage();

  return (
    <>
        <p className={styles.sectionSubText}>
          {language? texts['myworkpt']:texts['myworken']}
        </p>
        <h2 className={styles.sectionHeadText}>
        {language? texts['myprojectspt']:texts['myprojectsen']}
        </h2>

      <div className='w-full flex mt-3 text-white text-[17px] max-w-3xl leading-[30px]'>
        {language? texts['myworktextpt']:texts['myworktexten']}
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        { (language?projectspt:projectsen).map((project, index) => ( <ProjectCard key={`proejct-${index}`} index={index} {...project} /> ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works');
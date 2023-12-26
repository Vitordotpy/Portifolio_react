import React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { BlackHoleCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { texts } from '../constants'
import { useLanguage } from './context/LanguageContext'

const Contact = () => {
  const {language} = useLanguage();

  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { };

  const handleSubmit = (e) => { };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          {language?texts['contactheaderpt']:texts['contactheaderen']}
        </p>
        <h3 className={styles.sectionHeadText}>
        {language?texts['contactpt']:texts['contacten']}
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{language?texts['contactnamept']:texts['contactnameen']}</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder={language?texts['contactnamephpt']:texts['contactnamephen']} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{language?texts['contactemailpt']:texts['contactemailen']}</span>
            <input type='text' name='e-mail' value={form.email} onChange={handleChange} placeholder={language?texts['contactemailphpt']:texts['contactemailphen']} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{language?texts['contactmessagept']:texts['contactmessageen']}</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder={language?texts['contactmessagephpt']:texts['contactmessagephen']} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
           </label>
           <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' type='submit' >{loading ? language?texts['contactsendingpt']:texts['contactsendingen']:language?texts['contactsendpt']:texts['contactsenden']}

           </button>
          
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <BlackHoleCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
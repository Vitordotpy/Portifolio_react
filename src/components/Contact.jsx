import React from 'react'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'

import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { texts } from '../constants'
import { useLanguage } from './context/LanguageContext'

const Contact = () => {
  const { language } = useLanguage();

  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value})
   };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_zpsybkq','template_vle24ag',{from_name: form.name, to_name: 'Vitor Moura', from_email: form.email, to_email: 'v.program.py@gmail.com', message: form.message }, 'WxudeCndQfK2mx285').then(() => {setLoading(false); alert('Sucess'); setForm({name: '', email : '', message: ''})}, (error) => {setLoading(false); console.log(error); alert('error');});
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex  overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-tertiary p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>
          {language ? texts['contactheaderpt'] : texts['contactheaderen']}
        </p>
        <h3 className={styles.sectionHeadText}>
          {language ? texts['contactpt'] : texts['contacten']}
        </h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{language ? texts['contactnamept'] : texts['contactnameen']}</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder={language ? texts['contactnamephpt'] : texts['contactnamephen']} className='bg-fourtiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{language ? texts['contactemailpt'] : texts['contactemailen']}</span>
            <input type='text' name='e-mail' value={form.email} onChange={handleChange} placeholder={language ? texts['contactemailphpt'] : texts['contactemailphen']} className='bg-fourtiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{language ? texts['contactmessagept'] : texts['contactmessageen']}</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder={language ? texts['contactmessagephpt'] : texts['contactmessagephen']} className='bg-fourtiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>
          <button className='purple-cian-gradient py-3 px-8 outline-none w-fit text-white font-bold  shadow-card rounded-xl' type='submit' style={{textShadow:'1px 1px 1px black'}} >{loading ? language ? texts['contactsendingpt'] : texts['contactsendingen'] : language ? texts['contactsendpt'] : texts['contactsenden']}

          </button>

        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
import { motion } from 'framer-motion'
import { useState } from 'react'
import classes from './Options.module.scss'

export const Options = () => {
	
	const [isActiveFirst, setActiveFirst] = useState('')
	const [isActiveSecond, setActiveSecond] = useState('')
	const [langText, setLangText] = useState('RU')

  return (
	 <div className={classes.Options}>
		 <h3>Settings</h3>
		 <ul>
			<li onMouseEnter={() => setActiveFirst(classes.active)} onMouseLeave={() => setActiveFirst('')}><span className={classes.Theme}>
			<motion.span
				initial={{left: '-200%'}}
				whileHover={{left: '0%'}}
			></motion.span>
			</span><p className={isActiveFirst}>Change theme</p></li>
			<li 
			onMouseEnter={() => setActiveSecond(classes.active)} 
			onMouseLeave={() => setActiveSecond('')}
			>
				<motion.span 
				className={classes.Lang}
				transition={{
					duration: 0.6
				}}
				whileHover={{
					translateX: [0,4,-4,4,-4,4,-4,0]
				}}
				onMouseEnter={() => setTimeout(() => {setLangText('ENG')},300)}
				onMouseLeave	={() => setLangText('RU')}
				>
				{langText}
				</motion.span>
				<p className={isActiveSecond}>Change language</p>
			</li>
		 </ul>
	 </div>
  )
}

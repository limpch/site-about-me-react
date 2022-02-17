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
<<<<<<< HEAD
			<li>
			<span className={classes.Theme}>
			<motion.span
				onMouseEnter={() => setActiveFirst(classes.active)} 
				onMouseLeave={() => setActiveFirst('')}
=======
			<li onMouseEnter={() => setActiveFirst(classes.active)} onMouseLeave={() => setActiveFirst('')}><span className={classes.Theme}>
			<motion.span
>>>>>>> 6791fcab1b0a57ddb03ad4254be3b7f21d9809f6
				initial={{left: '-200%'}}
				whileHover={{left: '-50%'}}
			></motion.span>
			</span><p className={isActiveFirst}>Change theme</p></li>
<<<<<<< HEAD
			<li>
=======
			<li 
			onMouseEnter={() => setActiveSecond(classes.active)} 
			onMouseLeave={() => setActiveSecond('')}
			>
>>>>>>> 6791fcab1b0a57ddb03ad4254be3b7f21d9809f6
				<motion.span 
				className={classes.Lang}
				transition={{
					duration: 0.6
				}}
				whileHover={{
					translateX: [0,4,-4,4,-4,4,-4,0]
				}}
<<<<<<< HEAD
				onMouseEnter={() => {
					setTimeout(() => {setLangText('ENG')},300)
					setActiveSecond(classes.active)
					}}
				onMouseLeave	={() => {
					setLangText('RU')
					setActiveSecond('')
					}}
=======
				onMouseEnter={() => setTimeout(() => {setLangText('ENG')},300)}
				onMouseLeave	={() => setLangText('RU')}
>>>>>>> 6791fcab1b0a57ddb03ad4254be3b7f21d9809f6
				>
				{langText}
				</motion.span>
				<p className={isActiveSecond}>Change language</p>
			</li>
		 </ul>
	 </div>
  )
}

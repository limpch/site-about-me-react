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
			<li>
			<span className={classes.Theme}>
			<motion.span
				onMouseEnter={() => setActiveFirst(classes.active)} 
				onMouseLeave={() => setActiveFirst('')}
				initial={{left: '-200%'}}
				whileHover={{left: '-50%'}}
			></motion.span>
			</span><p className={isActiveFirst}>Change theme</p></li>
			<li>
				<motion.span 
				className={classes.Lang}
				transition={{
					duration: 0.6
				}}
				whileHover={{
					translateX: [0,4,-4,4,-4,4,-4,0]
				}}
				onMouseEnter={() => {
					setTimeout(() => {setLangText('ENG')},300)
					setActiveSecond(classes.active)
					}}
				onMouseLeave	={() => {
					setLangText('RU')
					setActiveSecond('')
					}}
				>
				{langText}
				</motion.span>
				<p className={isActiveSecond}>Change language</p>
			</li>
		 </ul>
	 </div>
  )
}

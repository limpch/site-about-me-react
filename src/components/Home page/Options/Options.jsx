import { motion } from 'framer-motion'
import { useState } from 'react'
import { DATA } from '../../../DATA'
import classes from './Options.module.scss'

export const Options = () => {
	
	const [isActiveFirst, setActiveFirst] = useState('')
	const [isActiveSecond, setActiveSecond] = useState('')
	const [langText, setLangText] = useState('RU')

  return (
	 <div className={classes.Options}>
		 <h3>{DATA.eng.home.settings[0]}</h3>
		 <ul>

			<li>
				<motion.span
					className={classes.Theme}
					onMouseEnter={() => setActiveFirst(classes.active)} 
					onMouseLeave={() => setActiveFirst('')}>
						<motion.span
							initial={{left: '-300%'}}
							whileHover={{left: '-50%'}}
						></motion.span>
				</motion.span>
				<p className={isActiveFirst}>{DATA.eng.home.settings[1]}</p>
			</li>

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
				<p className={isActiveSecond}>{DATA.eng.home.settings[2]}</p>
			</li>
		 </ul>
	 </div>
  )
}

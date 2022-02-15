import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../../components/Nav/Nav'
import '../../nullstyle.scss'
import classes from './Wrapper.module.scss'


export const Wrapper = ({}) => {
	const wrapperRef = useRef(null)

	const [duration, setDuration] = useState(0.8)
	setTimeout(() => {
		setDuration(0.1)
	}, 0.8);

  return (
	 <div 
	 ref={wrapperRef} 
	 className={[classes.Wrapper, classes.dark].join(' ')}
	 >
		<motion.div 
		drag
		dragConstraints={wrapperRef}
		className={classes.PageContainer}
		initial={{
			scale: 0.5,
			opacity: 0,
		}}
		animate={{
			scale: 1,
			opacity: 1,
			boxShadow: 'var(--txt-shadow)'
		}}
		transition={{
			duration: duration
		}}
		whileTap={{
			scale: 0.96,
			boxShadow: '0px 0px 0px #808080',
		}}
		>
			<Nav />
			<Outlet/>
		</motion.div>
	 </div>
  )
}

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../../components/Nav/Nav'
import '../../nullstyle.scss'
import classes from './Wrapper.module.scss'


export const Wrapper = ({}) => {

	const wrapperRef = useRef(null)

  return (
	 <div ref={wrapperRef} className={[classes.Wrapper, classes.dark].join(' ')}>
		<motion.div 
		drag
		dragConstraints={wrapperRef}
		className={classes.PageContainer}
		
		>
			<Nav />
			<Outlet/>
		</motion.div>
	 </div>
  )
}

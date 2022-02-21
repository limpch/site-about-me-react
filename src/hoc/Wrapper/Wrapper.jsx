import { AnimateSharedLayout, motion } from 'framer-motion'
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
		<AnimateSharedLayout>
			<motion.div 
			layout
			className={classes.PageContainer}>
				<Nav />
				<motion.div
					//animate={{height: 0}}
					initial={{height: 'auto'}}
					style={{overflow: 'hidden'}}
				>
					<Outlet/>
				</motion.div>
			</motion.div>
		</AnimateSharedLayout>
	 </div>
  )
}

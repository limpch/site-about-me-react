import { AnimateSharedLayout, motion } from 'framer-motion'
import { Inform } from '../../components/AboutMe/Inform/Inform'
import { Photo } from '../../components/AboutMe/Photo/Photo'
import classes from './About.module.scss'

export const About = () => {
   return (
	  	<AnimateSharedLayout>
			<motion.div
			layout
			className={classes.About}>
				<Photo />
				<Inform />
			</motion.div>
	 	</AnimateSharedLayout>
   )
}

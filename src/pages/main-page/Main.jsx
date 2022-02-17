import { AnimateSharedLayout, motion } from 'framer-motion'
import { Options } from '../../components/Home page/Options/Options'
import { ShortInfo } from '../../components/Home page/ShortInfo/ShortInfo'
import classes from './Main.module.scss'

export const Main = () => {
  return (
	<AnimateSharedLayout>
		<motion.div className={classes.Main}>
			<ShortInfo />
			<Options />
		</motion.div>
	</AnimateSharedLayout>
  )
}

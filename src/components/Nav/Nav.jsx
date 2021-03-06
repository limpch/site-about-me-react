import { AnimateSharedLayout, motion } from "framer-motion"
import { CuLink } from "../Custom/CuLink/CuLink"
import classes from './Nav.module.scss'


export const Nav = () => {
  return (
	 <div className={classes.Nav}>
	 	<AnimateSharedLayout>
			<motion.ul
			layout
			>
				<CuLink to='/'>Home</CuLink>
				<CuLink to='/about-me'>About me</CuLink>
				<CuLink to='/my-skills'>My skills</CuLink>
				<CuLink to='/portfolio'>Portfolio</CuLink>
				<CuLink to='/contacts'>Contacts</CuLink>
			</motion.ul>
		</AnimateSharedLayout>
	 </div>
  )
}

import { AnimateSharedLayout, motion } from 'framer-motion'
import React from 'react'

export const About = () => {
   return (
	  	<AnimateSharedLayout>
			<motion.div
			layout>
				about me
			</motion.div>
	 	</AnimateSharedLayout>
   )
}

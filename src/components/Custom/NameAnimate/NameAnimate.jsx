import { motion } from "framer-motion"
import { CuLink } from "../CuLink/CuLink"

export const NameAnimate = ({text, className}) => {
	const keyframes = {
		from: {
			color: 'var(--main-clr)',
			fontSize: '32px',
			fontWeight: '500'
		},
		to: {
			color: 'var(--second-clr)',
			fontSize: '42px',
		},
	}

	let innerText = text
	innerText = innerText.split('')
	return (
		innerText.map((letter, index) => 
			<motion.span
			key={index}
			variants={keyframes}
			initial={'from'}
			whileHover={'to'}
			transition={{
				duration: 0.3,
			}}
			className={className}
			>
				<CuLink to={'about-me'} >
					{letter}
				</CuLink>
			</motion.span>
		)
	)
}

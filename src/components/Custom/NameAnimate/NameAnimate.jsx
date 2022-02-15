import { motion } from "framer-motion"

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
		innerText.map(letter => 
			<motion.span
			variants={keyframes}
			initial={'from'}
			whileHover={'to'}
			transition={{
				duration: 0.3,
			}}
			className={className}
			>
				{letter}
			</motion.span>
		)
	)
}

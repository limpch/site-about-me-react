import classes from './CuLink.module.scss'
import { Link, useMatch } from 'react-router-dom'
import { motion } from 'framer-motion'



export const CuLink = ({to, children}) => {
	const match = useMatch({
		path: to,
		end: true
	})

	return (
		<motion.span
			style={{
			position: 'relative'
			}}
		>
			{match && <ActiveUnderline/>}
			<Link to={to} className={match ? [classes.navLink, classes.activeLink].join(' ') : classes.navLink}>{children}</Link>
		</motion.span>
	)
}

const ActiveUnderline = () => {
	return (
		<motion.div
			layoutId='activeLine'
			style={{
				width: '100%',
				height: 2,
				position: 'absolute',
				background: 'var(--main-clr)',
				bottom: '-3px'
			}}
		/>
	)
}

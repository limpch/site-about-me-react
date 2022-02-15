import classes from './CuLink.module.scss'
import { Link, useMatch } from 'react-router-dom'



export const CuLink = ({to, children}) => {
	const match = useMatch({
		path: to,
		end: true
	})

  return (
	<Link to={to} className={match ? [classes.navLink, classes.activeLink].join(' ') : classes.navLink}>{children}</Link>
  )
}

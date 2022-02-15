import { motion } from 'framer-motion'
import classes from './Options.module.scss'

export const Options = () => {
  return (
	 <div className={classes.Options}>
		 <h3>Settings</h3>
		 <ul>
			<li><motion.span
			 className={classes.Theme}
			 animate={{
				background: 'linear-gradient(90deg, var(--main-clr) 0%,  var(--main-clr) 50%,  var(--bg-container-clr) 50%,  var(--bg-container-clr) 100%)',
			 }}
			 whileFocus={{
				background: 'var(--main-clr)',
			 }}
			 ></motion.span><p>Change theme</p></li>
			<li><span className={classes.Lang}>RU</span><p>Change language</p></li>
		 </ul>
	 </div>
  )
}

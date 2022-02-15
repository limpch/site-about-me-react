import classes from './Options.module.scss'

export const Options = () => {
  return (
	 <div className={classes.Options}>
		 <span>Settings</span>
		 <ul>
			<li><span></span><span>Change theme</span></li>
			<li><span></span><span>Change language</span></li>
		 </ul>
	 </div>
  )
}

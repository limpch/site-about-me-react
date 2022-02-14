import classes from './PageContainer.module.scss'

export const PageContainer = ({children}) => {
  return (
	 <div className={classes.PageContainer}>
	 	{children}
	 </div>
  )
}

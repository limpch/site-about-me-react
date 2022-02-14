import { Outlet } from 'react-router-dom'
import { Nav } from '../../components/Nav/Nav'
import '../../nullstyle.scss'
import classes from './Wrapper.module.scss'


export const Wrapper = ({}) => {
  return (
	 <div className={[classes.Wrapper, classes.dark].join(' ')}>
		<div className={classes.PageContainer}>
			<Nav />
			<Outlet/>
		</div>
	 </div>
  )
}

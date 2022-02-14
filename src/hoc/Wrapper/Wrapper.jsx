import { Outlet } from 'react-router-dom'
import { PageContainer } from '../PageContainer/PageContainer'
import '../../nullstyle.scss'
import classes from './Wrapper.module.scss'

export const Wrapper = ({}) => {
  return (
	 <div className={[classes.Wrapper, classes.dark].join(' ')}>
		<PageContainer>
			
			<Outlet/>
		</PageContainer>
	 </div>
  )
}

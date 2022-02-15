import { Options } from '../../components/Home page/Options/Options'
import { ShortInfo } from '../../components/Home page/ShortInfo/ShortInfo'
import classes from './Main.module.scss'

export const Main = () => {
  return (
	<>
		<div className={classes.Main}>
			<ShortInfo />
			<Options />
		</div>
	</>
  )
}

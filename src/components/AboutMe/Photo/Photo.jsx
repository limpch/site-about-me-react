import classes from './Photo.module.scss'
import me from '../../../img/me.png'
import points1 from '../../../img/квадратики.png'
import points2 from '../../../img/квадратики2.png'


export const Photo = () => {
	return (
		<div className={classes.Photo}>
			<div className={classes.Block}></div>
			<img src={me} alt="my photo" className={classes.Me} />
			<img src={points2} alt="" className={classes.Points} />
		</div>
	)
}
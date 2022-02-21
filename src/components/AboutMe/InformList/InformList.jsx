import classes from './InformList.module.scss'

export const InformList = () => {
	return (
		<div className={classes.List}>
			<div>City: <span>Krasnodar</span></div>
			<div>Age: <span>18 y.o.</span></div>
			<div>Birth date: <span>26.12.2003</span></div>
		</div>
	)
}
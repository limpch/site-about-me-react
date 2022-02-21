import { InformList } from '../InformList/InformList'
import classes from './Inform.module.scss'

export const Inform = () => {
  	return (
			<div className={classes.Inform}>
				<p>Hello! My name is Roma and I am a web developer!</p>
				<br />
				<p>I have been developing websites for about a year.</p>
				<p>Now I am learning javascript developing!</p>
				<p>I am interesting in React library and have a great desire to grow and develop in the web development area.</p>
				<br />
				<p>My github account is available via the <a href="https://github.com/limpch" target="_blank">link</a>.</p>
				<InformList/>
			</div>
  	)
}

import ReactTypingEffect from 'react-typing-effect'
import { NameAnimate } from '../../Custom/NameAnimate/NameAnimate';
import classes from './ShortInfo.module.scss'
import { DATA } from '../../../DATA';

export const ShortInfo = () => {
  return (
	<div className={classes.Shortinfo}>
		<div>{DATA.eng.home.hello} <NameAnimate className={classes.letter} text={DATA.eng.home.myName}/></div>
		<ReactTypingEffect
			text={DATA.eng.home.typingText}
			cursorRenderer={cursor => <div>{cursor}</div>}
			displayTextRenderer={(text, i) => {
				return (
					<div>
					{text.split('').map((char, i) => {
						const key = `${i}`;
						return (
						<span
							key={key}
						>{char}</span>
						);
					})}
					</div>
				);
			}}        
		/>
	</div>
  )
}

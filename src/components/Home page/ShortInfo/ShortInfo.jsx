import ReactTypingEffect from 'react-typing-effect'
import { NameAnimate } from '../../Custom/NameAnimate/NameAnimate';
import classes from './ShortInfo.module.scss'

export const ShortInfo = () => {
  return (
	<div className={classes.Shortinfo}>
		<div>Hello, I am <NameAnimate className={classes.letter} text="Roman Lipka"/></div>
		<ReactTypingEffect
			text={["React developer", "HTML coder", "Junior Front-end programmer"]}
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

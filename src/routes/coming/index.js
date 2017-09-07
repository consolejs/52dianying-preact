import { h, Component } from 'preact';
import style from './style';

export default class Coming extends Component {
	render() {
		return (
			<div class={style.coming}>
				<h1>Coming</h1>
				<p>即将上映的电影.</p>
			</div>
		);
	}
}

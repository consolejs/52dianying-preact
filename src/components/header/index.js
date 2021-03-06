import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				{/* <h1>Preact App</h1> */}
				<nav>
					<Link activeClassName={style.active} href="/">正在热映</Link>
					<Link activeClassName={style.active} href="/coming">即将上映</Link>
					<Link activeClassName={style.active} href="/profile/john">排行榜</Link>
				</nav>
			</header>
		);
	}
}

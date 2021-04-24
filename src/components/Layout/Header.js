import { Fragment } from 'react';
import classes from './Header.module.css';
import headerImg from '../../assets/images/header-img-large.jpeg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {

	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Nick's Restaurant</h1>
				<HeaderCartButton/>
			</header>
			<div className={classes['main-image']}>
				<img src={headerImg} alt="food"/>
			</div>
		</Fragment>
	)
}

export default Header;
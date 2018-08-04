import React from 'react'
import { NavLink } from 'react-router-dom'


class Header extends React.Component {
	render() {
		return (
			<header id="header">
				<h1>Header</h1>
				<NavLink to="/" activeClassName="selected" exact={true}>Avenue Fashion</NavLink>
				<NavLink to="/mens" activeClassName="selected">Mens</NavLink>
				<NavLink to="/womens" activeClassName="selected">Womens</NavLink>
				<NavLink to="/brand" activeClassName="selected" exact={true}>The brand</NavLink>
				<NavLink to="/stores" activeClassName="selected">Local stores</NavLink>
				<NavLink to="/look-book" activeClassName="selected">Look book</NavLink>
			</header>
		)
	}
}

export default Header
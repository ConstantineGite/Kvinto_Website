import React, { Component } from "react";
export default class Header extends Component {

	public render(): JSX.Element | null {
		return (
				<header>
					<div id="menu">MENU</div>
					<div id="lang">EN</div>
				</header>
		);
	}

}

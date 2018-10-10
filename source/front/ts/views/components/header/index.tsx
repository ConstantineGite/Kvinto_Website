import { Component, createElement } from "react";

export default class Header extends Component {
	public render(): JSX.Element {
		return  createElement("div", null, "HEADER");
	}
}
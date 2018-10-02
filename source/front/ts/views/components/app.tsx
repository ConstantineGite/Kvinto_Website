import React, { Component, createElement } from "react";
import Header from "./header/index";
import MidleBlock from "./midle_block/index";

export default class FormComposition extends Component {

	public render(): JSX.Element {
		return (
			<div className="form-wrap">
				<Header />
				<MidleBlock />
			</div>
		);
	}
}
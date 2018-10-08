import React, { Component } from "react";
import { Link } from "react-router-dom";

interface IState {
	name: string;
}

export default class MidleBlock extends Component<{}, IState> {
	public state: IState = {
		name: ""
	};

	public render(): JSX.Element | null {
		return this.getInner();
	}

	private getInner(): JSX.Element {
		return (
			<section >
				{this.menyTop()}
				{this.state.name}
			</section>
		);
	}

	private menyTop(): JSX.Element {
		return (
			<ul>
				<Link to="/tab1"><li onClick={this.clickMethod.bind(this, "tab1")}>tab1</li></Link>
				<Link to="/tab2"><li onClick={this.clickMethod.bind(this, "tab2")}>tab2</li></Link>
			</ul>
		);
	}

	private	updaBlock(val: string): JSX.Element {
		return  (val === "tab1") ? <div>block1</div> : <div>block2</div>;
	}

	private clickMethod(val: string): any{
		this.setState({ name: val });
		return (val === "tab1") ? <div>description_1</div> : <div>Description2</div>;
	}

}








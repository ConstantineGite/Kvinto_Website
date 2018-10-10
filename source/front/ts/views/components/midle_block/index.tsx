import React, { Component } from "react";
import { Link } from "react-router-dom";
const a = "клнтент digital signature digital signature";
const b = "Все о пончиках куте пончики лучшые погнчики пончики купить пончики уже сейчас";
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
				<Link to="/tab1"><li onClick={this.clickMethod.bind(this, a)}>tab1</li></Link>
				<Link to="/tab2"><li onClick={this.clickMethod.bind(this, b)}>tab2</li></Link>
			</ul>
		);
	}

	

	private	updaBlock(val: string): JSX.Element {
		return  (val === "tab1") ? <div>Все о digital signature
		клнтент digital signature digital signature</div> : <div>>Все о пончиках куте пончики лучшые 
			погнчики пончики купить пончики уже сейчас</div>;
	}

	private clickMethod(val: string): any{
		console.log("text block");
		this.setState({ name: val });
		return (val === "tab1") ? <div>Все о digital signature
			клнтент digital signature digital signature</div> : <div>Все о пончиках куте пончики лучшые 
			погнчики пончики купить пончики уже сейчас</div>;
	}

}








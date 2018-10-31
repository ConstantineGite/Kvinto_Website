import * as React from "react";
	// import _Config from "~/c/config";
	// import { Data } from "~/c/data";
	// import { Greeter } from "~/c/timeTriger";
	// import { Informer } from "../common/informer";
let numberSlide = 0;

interface IState {
	slidePosition: 0;
	nameElem: "fadein";
}

export default class SliderBlock extends React.Component {
	public state: IState = {
		slidePosition: 0,
		nameElem: "fadein"
	};

	private isMount: boolean = false;

	public render(): JSX.Element {
		//this.nextSlide();
		console.log(this.elementColection().props.children[2], "elementColection()");
		return (
			<div>
				<main className="fadein"></main>
			</div>
		);
	}

	public componentDidMount(): void {
		// this.isMount = true;

		// Greeter.subscribe(
		// 	(): void => {
		// 		if (!this.isMount) return;
		// 		this.nextSlide();
		// 	}
		// );
	}

	// public componentWillUnmount(): void {
	// 	this.isMount = false;
	// }
	private elementColection(): JSX.Element {
		return (
			<ul>
				<li className="0">1</li>
				<li className="1">2</li>
				<li className="2">3</li>
				<li className="3">4</li>
			</ul>
		);
	}

	private nextSlide(): number {
		console.log("start module ---> ---> --->");
		setInterval(() => {
			numberSlide++;
			console.log("TIMER START" + numberSlide);
		}, 1000);
		return 3;
	}

	// private rotation(): JSX.Element[] {

	// }
}

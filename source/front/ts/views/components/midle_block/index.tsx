import React, { Component } from "react";
import SliderBlock from "./components/slider/index";

export default class MidleBlock extends Component<{}> {

	public render(): JSX.Element | null {
		console.log("start module__-----__+++__+_____----->---->----->---------->");
		return (
				<main>
					<SliderBlock />
				</main>
		);
	}

}
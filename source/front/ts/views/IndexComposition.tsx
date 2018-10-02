import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";

export class IndexComposition extends React.Component {
	public render(): JSX.Element {
		return (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		);
	}
}

import { ViewController } from "./views/viewController";
import { IndexComposition } from "./views/indexComposition";

import "./../style/stylesheets/main.sass";

class Main {
	public static async init(): Promise<void> {
		new ViewController(IndexComposition);
	}
}

Main.init();

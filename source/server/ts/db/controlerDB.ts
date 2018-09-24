import * as mongoose from "mongoose";

class App {

	public mongoUrl: string = "localhost:27017";

	constructor() {
		this.mongoSetup();
	}

	private mongoSetup(): void{
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl);
	}

}

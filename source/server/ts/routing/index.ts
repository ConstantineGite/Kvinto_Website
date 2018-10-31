import * as http from "http";
import * as fs from "fs";
import { relative } from "path";
import pug from "pug";

const compiledFunction = relative(process.cwd(),  "./source/server/pug/components/tamplate.pug");
console.log(compiledFunction, "compiledFunction");

const massComponents = [
	"./source/server/pug/components/header.pug",
	"./source/server/pug/components/tamplate.pug",
	"./source/server/pug/components/tamplate_test.pug"
];

let cnt: number = 0;

const conectPugComponents = (paths : any) => {
	paths.map((name: string) => {
		cnt++;
		const compiledFunction2 = relative(process.cwd(),  name);
		const file2 = fs.createReadStream(relative(process.cwd(), "./" + name), { encoding: "utf8", autoClose: true });

		console.log(pug.renderFile(name), cnt);
		// console.log(pug.renderFile("./source/server/pug/components/tamplate.pug"), "---------->");
		// console.log(pug.renderFile("./source/server/pug/components/tamplate_test.pug"), "---------->");

		//console.log(file2, "-------------------------------------------------->");
		//data.push(fs.readFileSync(name));
			//console.log(data, "----------data----------");
		// const data = fs.readFileSync(name);

		// let html2 = [];
		// html2 = pug.renderFile(data);
		// console.log(html2, "html2");

		// file2.on("error", (err: Error): void => {
		// 	console.error(err);
		// });

		// file2
		// 	.on("open", (): void => {
		// 		console.log("open");
		// 	})
		// 	.on("close", (): void => {
		// 		console.log("close");
		// 	});

				// console.log(name, "paths");
				// console.log(">>>>>>>>>>>");

		//const data = [pug.renderFile(fs.readFileSync(name))];
		//console.log(pug.renderFile(fs.readFileSync(name)), "---------->");

	});
};

conectPugComponents(massComponents);

const _TEMPLATE = relative(process.cwd(), "./source/server/pug/components/tamplate.pug");

const html = pug.renderFile(_TEMPLATE);

const server = http
	.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		const m = req.url;
		const dataHTML = fs.readFileSync("index-dev.html");
		const dataHTML2 = fs.readFileSync("index-dev2.html");
		if (m === "/tab1") {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(html);
		} else if (m === "/tab2") {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(dataHTML2);
		} else if (m === "/build/build.min.js") {
			try {
				const file = fs.createReadStream(relative(process.cwd(), "./" + m), { encoding: "utf8", autoClose: true });
				file.pipe(res);
				file.on("error", (err: Error): void => {
					res.statusCode = 500;
					res.end("Server Error");
					console.error(err);
				});

				file
					.on("open", (): void => {
						console.log("open");
					})
					.on("close", (): void => {
						console.log("close");
					});
			} catch (err) {
				res.end(404);
			}
		} else if (m === "/"){
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end("<h1>index Page</h1>");
		}
	})
	.listen(40876);

	// let ROUTER = (path, param) => {
	// 	m = param 
	// }
import * as http from "http";
import * as fs from "fs";
import { relative } from "path";
import pug from "pug";
//const path = require("path");
//import path from "path";
//console.log(path, "path");
//const compiledFunction = pug.compileFile(relative(process.cwd(), "/source/server/pug/components/tamplate.pug"));
const compiledFunction = relative(process.cwd(),  "./source/server/pug/components/tamplate.pug");
console.log(pug.compileFile(compiledFunction),    "<-------------compiledFunction-------------->");
////
const _TEMPLATE = relative(process.cwd(), "./source/server/pug/components/tamplate.pug");
const html = pug.renderFile(_TEMPLATE);
console.log(html, "html");

const server = http
	.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		const m = req.url;
		const dataHTML = fs.readFileSync("index-dev.html");
		const dataHTML2 = fs.readFileSync("index-dev2.html");
		//console.log(pug, "pug");

		if (m === "/tab1") {
			res.writeHead(200, { "Content-Type": "text/html" });
			console.log("-------------------------------------------------------------->");
			res.end(dataHTML);
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
		}
	})
	.listen(40876);

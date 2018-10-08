import * as http from "http";
import * as fs from "fs";

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		const m = req.url;
		const filePath = fs ;
		if (m === "/a") {
		if (m !== undefined) {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(` <h1>server start 2 </h1>`);
				res.end();
		}
		} else if (m === "/b") {
		if (m !== undefined){
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(` <h1>server start 2 </h1>`);
				res.end();
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(`<h1>server start</h1>`);
				res.end();
			}
		}
		res.end();
}).listen(8080)
import * as http from "http";

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(`<h1>server start</h1>`);
	res.end();
}).listen(8080)
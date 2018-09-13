import * as http from "http";
// import routing from "./routing";
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	//console.log(req, 'req');
	console.log('http://localhost:8080');
	res.write(`<h1> asdasdasd</h1>`);
	res.end();
}).listen(8080)
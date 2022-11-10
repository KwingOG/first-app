 const fs = require("fs");
 const requestHandler = (req, res) => {
 	const url = req.url;
 	const method = req.method;
	if (url === "/"){
	 	res.setHeader("Content-type", "text/html");
	 	res.write("<html>");
	 	res.write("<head><title>My first response</title></head>");
	 	res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form></body>');
	 	res.write("</html>");
 		return res.end();
 	}
 	if(url === '/message' && method === 'POST'){
 	const body = [];
 	req.on('data', (chunk) => {
 		console.log(chunk);
 		body.push(chunk);
 	});
 	return req.on('end', () => {
 		const parsedBody = Buffer.concat(body).toString();
 		const msg = parsedBody.split('=')[1];
 		fs.writeFile('userMsg.txt', msg, (err) =>{
 		 	res.statusCode = 302;
 			res.setHeader('Location', '/' );
 			return res.end();
 		});
 	})

 }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first response</title></head>");
  res.write("<body><h1>Welcome to the landing page</h1></body>");
  res.write("</html>");
  res.end();

 };

module.exports = requestHandler;

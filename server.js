const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = 'localhost';
const port = 4000;

const htmlFileHandler = function (req, res) {
    const htmlFilePath = path.join(__dirname, "templates", "index.html");
    fs.readFile(htmlFilePath, function (error, html) {
        if (error) {
            console.error(error);
            res.writeHead(500);
            res.end("Error loading HTML File");
        } else {
            res.setHeader("Content-Type", "text/html")
            res.writeHead(200);
            res.write(html);
            res.end();
        }
    });
}

const server = http.createServer(htmlFileHandler)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
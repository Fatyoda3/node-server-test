import http from 'http';
import dotenv from "dotenv";
import fs from "fs/promises";
import path from 'path';
import url from 'url';


dotenv.config();

const PORT = process.env.PORT || 8080;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log_file_path = path.join(__dirname, "logs", 'log.dat');

console.log(log_file_path);
const logger = (whereNow) => {
    fs.appendFile(log_file_path, `\naccessed the ${whereNow} \n`)
}

const SERVER = http.createServer(
    async (req, res) => {
        // fs.appendFile(log_file_path, `\nserver booted at ${(new Date()).getTime()}\n`);
        try {
            fs.appendFile(log_file_path, JSON.stringify(req.headers))
            if (req.method === "GET") {

                let filepath;

                if (req.url === '/') {
                    logger(`${req.url.host}`);

                    filepath = path.join(__dirname, "public", "index.html");
                }
                else if (req.url === '/about') {
                    // fs.writeFile(log_file_path, "accessed the about ")
                    logger(req.url);

                    console.log('second');
                    filepath = path.join(__dirname, "public", "about.html");
                }
                else {
                    console.log("Handle 404 cases");
                    filepath = path.join(__dirname, "public", "404.html");
                    res.statusCode = 404;
                }


                const data = await fs.readFile(filepath);

                res.setHeader("Content-Type", "text/html");

                res.write(data);
                res.end();
            } else {
                res.statusCode = 405;
                res.end("Method not allowed");
            }
        } catch (Ex) {
            console.error(Ex);
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
    }
);

SERVER.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
    //    fs.appendFile(log_file_path, `server booted at ${(new Date()).getTime()}\n`);
});

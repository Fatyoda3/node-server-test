import http from "http";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import url from "url";


dotenv.config();

const PORT = process.env.PORT || 8080;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const log_file_path = path.join(__dirname, "logs", 'log.dat');

const logger = (whereNow) => {
    fs.appendFile(log_file_path, `\naccessed the ${whereNow} \n`)
}

const SERVER = http.createServer(
    async (req, res) => {


        try {
            
            fs.appendFile(log_file_path, JSON.stringify(req.headers));

            let singleUser;
            if (req.method === "GET") {

                let filepath;
                let id = '';
                filepath = path.join(__dirname, "public", "data.json");

                if (req.url === '/api/') {
                    // logger(req.url);
                    logger(`${req.url.host}`);



                }

                let data = await fs.readFile(filepath);

                if (req.url.match(/\/api\/users\/([0-9]+)/) || req.url.match(/\/api\/users\/([a-z]+)/)) {

                    logger(req.url);
                    id = req.url.split('/')[3];

                    singleUser = (JSON.parse(data))[id];

                    // console.log(JSON.stringify(singleUser))
                }




                res.setHeader("Content-Type", "Application/JSON");

                if (!id)
                    res.write(data.toString());
                else
                    res.write(JSON.stringify(singleUser));

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

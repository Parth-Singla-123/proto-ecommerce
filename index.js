import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});
db.connect();


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve views from the 'views' folder
app.set('views', path.join(__dirname, 'views'));

app.get("/", async (req, res) => {
    try{
      const result = await db.query("SELECT * FROM product");
      const items = result.rows;
      console.log(items);
      res.render("index", {
        listTitle: "Today",
        listItems: items,
      });
    }
    catch (err) {
      console.log(err);
    }
  });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
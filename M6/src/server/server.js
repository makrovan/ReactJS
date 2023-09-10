import express from "express";
import ReactDOM from "react-dom/server";
// import { Header } from "../shared/Header.tsx";
import { indexTemplate } from "./indexTemplate";
import {App} from "../App";
const app = express();

app.use("/static", express.static("./dist/client"));
app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get("/auth", (req, res) => {
  // req.query.code;
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});

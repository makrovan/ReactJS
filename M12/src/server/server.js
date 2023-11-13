import express from "express";
import ReactDOM from "react-dom/server";
// import { Header } from "../shared/Header.tsx";
import { indexTemplate } from "./indexTemplate";
import {App} from "../App";
import axios from "axios";
import compression from "compression";
import helmet from "helmet";

// const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

// if (!IS_DEV) {
// }

app.use(compression());
app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use("/static", express.static("./dist/client"));
// app.get("/auth", (req, res) => {
//   // req.query.code;
//   axios.post(
//       'https://www.reddit.com/api/v1/access_token',
//       `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
//       {
//         auth: {username: process.env.CLIENT_ID, password: 'TvVWqiWin1vh1tL9FB4PC9Ck1uZCgw'},
//         headers: {'Content-type': 'application/x-www-form-urlencoded'}
//       }
//   )
//       // .then(console.log)
//   res.send(
//       indexTemplate(ReactDOM.renderToString(App())),
//   );
// });
app.get("/auth", (req, res) => {
    // req.query.code;
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: { username: process.env.CLIENT_ID, password: process.env.SECRET },
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }
    )
        .then(({data}) => {
            res.send(indexTemplate(ReactDOM.renderToString(App()),data['access_token']));
        })
        .catch(console.log);
});

app.get("*", (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
    console.log("server started on port http://localhost:3000");
});

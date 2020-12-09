// index.js

/*
 * Required external modules
 */

const express = require("express");
const path = require("path");

/*
 * App variables
 */

const app = express();
const port = process.env.PORT || "8000";

/*
 * App configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/*
 * Routes definitions
 */

app.get("/", (req, res) => {
//     res.status(200).send("WHATABYTE: Food For Devs");
    res.render("index", { title: "Home" });
});

app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
})

/*
 * Server activation
 */

app.listen(port, () => {
    console.log(`listening to requests on http://localhost:${port}`);
});


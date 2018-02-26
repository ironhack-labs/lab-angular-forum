const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const cors = require("cors");
const index = require("./routes/index");
const auth = require("./routes/api/authentication.controller");

mongoose.connect("mongodb://localhost/forum-development");

const app = express();

require("./passport")(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.locals.title = "Express - Generated with IronGenerator";

let whitelist = ["http://localhost:4200"];
let corsOptions = {
  origin: function(origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(layouts);

app.use(
  session({
    secret: "angular auth passport secret shh",
    resave: true,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 2419200000 },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use("/", index);
app.use("/auth", auth);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

import express from "express";
import path from "path";
import router from "./routers";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDb from "connect-mongodb-session";
import { T } from "./libs/types/common";

//tcp2
const MongoDbStore = ConnectMongoDb(session);
const store = new MongoDbStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

// 1-Enterance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
// 2-sessions
app.use(
  session({
    secret: String(process.env.SECRET_SESSION),
    cookie: {
      maxAge: 1000 * 360 * 3,
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

// 3-views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// 4-routes
app.use("/admin", routerAdmin); //SSR EJS
app.use("/", router); //SPA: REACT

export default app;

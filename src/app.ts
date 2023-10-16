import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import { handleErrors } from "./middlewares/handleErros.middleware";
import UserRouter from "./routers/user.router";
import CouserRouter from "./routers/courses.router";
import UserCouserRouter from "./routers/usersCouser.router";

const app: Application = express();
app.use(json());

app.use("/", UserRouter);

app.use("/", CouserRouter);

app.use("/", UserCouserRouter);

app.use(handleErrors);

export default app;

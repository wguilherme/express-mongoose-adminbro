import cors from "cors";
import express from "express";
import userRouter from "./routers/user";
import itemRouter from "./routers/item";
import customerRouter from "./routers/customer";
import petRouter from "./routers/pet";
import rootRouter from "./routers/root";

const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
AdminBro.registerAdapter(AdminBroMongoose)


// get some models
import Item from "./models/Item"
import User from "./models/User"
import Pet from "./models/Pet"

require("./db/db");
const mongoosedb = require("./db/db");


const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(itemRouter);
app.use(customerRouter);
app.use(petRouter);
app.use(rootRouter);

const adminBro = new AdminBro({resources: [Item, User, Pet],rootPath: '/admin',})
const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)


app.listen(port, () => {console.log(`Server running on port ${port}`);});

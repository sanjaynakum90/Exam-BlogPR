import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


import HttpError from "./middleware/HttpError";
import connectDB from "./config/db";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json("hello from server");
});

app.use((req, res, next) => {
    return next(new HttpError("requested routes not found", 404));
});

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    res
        .status(error.statusCode || 500)
        .json({ message: error.message }, "internal server error");
});

const port = process.env.PORT || 5000;

async function startServer() {
    try {
        await connectDB();

        app.listen(port, (req, res) => {
            console.log(`server listening on ${port} `);
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}
startServer()


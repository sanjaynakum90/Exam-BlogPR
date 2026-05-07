import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";


import HttpError from "./middleware/HttpError.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js"

const app = express();


app.use(express.json());

app.use("/user", userRoutes);

app.use("/blog", blogRoutes);

app.get("/", (req, res) => {
    res.status(200).json("hello from server");
});

app.use((req, res, next) => {
    return next(new HttpError("requested routes not found", 404));
});

app.use((error, req, res, next) => {

    // console.log("error:", error);

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


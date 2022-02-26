import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

// db and authendicatedUser
import connecttDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRouters.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connecttDB(process.env.MONGO_URL)
      .then(() => {
        console.log("DB connected");
      })
      .catch((err) => console.log(err));
    app.listen(port, () => {
      console.log(`Server is listening on port :${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

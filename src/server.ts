import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";
mongoose.set("strictQuery", true); // warningni o'chirish
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("SUCCED");
    const PORT = process.env.PORT ?? 3005;

    app.listen(PORT, function () {
      console.log(`The server is running succesfully on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERROR on Mongodb connection", err);
  });

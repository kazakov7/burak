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
      console.info(`The server is running succesfully on port: ${PORT}`);
      console.log(` Admin Project on http://localhost:${3003}/admin \n`);
    });
  })
  .catch((err) => {
    console.log("ERROR on Mongodb connection", err);
  });

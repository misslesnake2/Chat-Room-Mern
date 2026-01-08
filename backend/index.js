const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const chatsRoutes = require("./routes/Chats");

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/chats", chatsRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

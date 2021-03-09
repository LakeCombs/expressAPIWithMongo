const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 4893;
const studentModel = require("./model/model");
const router = require("./router/router");
const cors = require("cors");
const app = express();

const DB = `mongodb+srv://lakecombs:lakecombs@cluster0.ajqpk.mongodb.net/studentDB?retryWrites=true&w=majority`;

mongoose.connect(DB, {
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useNewUrlParser: true
});

mongoose.connection
	.once("open", () => {
		console.log("connected to database successfully");
	})
	.on("error", () => {
		console.log("error connecting with database");
	});

app.get("/", () => {
	console.log("app is running");
});

app.use(express.json());
app.use(cors);
app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.use("/", express.static("./public"));
app.use("/", router);

app.listen(PORT, () => {
	console.log(`app is listening to ${PORT}`);
});

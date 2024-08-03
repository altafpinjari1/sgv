import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./db/connectdb.js";
import userRoute from "./routes/user.route.js"

// import cookieParser from "cookie-parser";


dotenv.config({});
connectdb();
const PORT = 8080;



const app = express();

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(cookieParser());

// app.corsOptions = {
//   origin:'http://localhost:5174/',
//   credentials:true,
// }
// app.use(cors(corsOptions));

// routes
// app.use("/api/v1/user", userRoute);

// "https://localhost:8080/api/v1/user/onlineAdmission"
// app.get("/home", (req, res) => {
//   return res
//     .status(200)
//     .json({ message: "I am coming for backend", success: true });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

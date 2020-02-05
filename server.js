require("dotenv").config();
const graphqlHTTP = require("express-graphql");
const express = require("express");
const connectDB = require("./config/db");
// const schema = require("./graphqlSchema/schema");
const cors = require("cors");

const app = express();
app.use(cors());
// Connect Database
connectDB();

// GraphQL Middleware
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//     pretty: true
//   })
// );

// Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

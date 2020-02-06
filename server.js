require("dotenv").config();
const graphqlHTTP = require("express-graphql");
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const schema = require("./graphQL/schema");

const app = express();
app.use(cors());

// Connect Database
connectDB();

// GraphQL Middleware
app.use(
  "/graphiql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

// Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
// (commented out because these routes havent been built out yet)
// app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;
const URL = process.env.DB_URI

app.listen(PORT, () => console.log(`Server started on:\n${URL}\nport ${PORT}`));

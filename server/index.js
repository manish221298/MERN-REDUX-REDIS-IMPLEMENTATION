const express = require("express");
const app = express();
const cors = require("cors");
const configureDb = require("./config/database");
const router = require("./config/routes");
const redis = require("redis");

const port = 4005;
configureDb();

const redisClient = redis.createClient(6379, "127.0.0.1");

// connect redis client
redisClient.connect();

redisClient.on("connect", function () {
  console.log("Redis client connected");
});
// redisClient.set('mykey', 'Hello Redis', redis.print);
// redisClient.get('mykey', redis.print);

redisClient.on("error", function (err) {
  console.error("Redis error: ", err);
});

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log("Server running on port", port);
});

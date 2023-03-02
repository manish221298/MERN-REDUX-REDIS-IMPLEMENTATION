const express = require('express');
const app = express();
const cors = require('cors');
const configureDb = require('./config/database');
const router = require('./config/routes');
const redis = require('redis');

const port = 4005;
configureDb();

const redisClient = redis.createClient(6379, '127.0.0.1');

// connect redis client 
redisClient.connect()

redisClient.on('connect', function () {
  console.log('Redis client connected');
});
// redisClient.set('mykey', 'Hello Redis', redis.print);
// redisClient.get('mykey', redis.print);

redisClient.on('error', function (err) {
  console.error('Redis error: ', err);
});

app.use(cors());
app.use(express.json());
app.use('/', router);

// app.get('/home', async(req, res) => {
//   let keyName = 'normalKey'
//   let getCacheData = await redisClient.get(keyName)
//   console.log("getCacheData", getCacheData)
//   let result = {
//     id:1,
//     name: "manish kumar chaurasia"
//   }
//   let resArray = ''
//   if(getCacheData){
//     resArray = JSON.parse(getCacheData)
//     console.log("GET CACHE DATA ")
//   }
//   else{
//     console.log("set cache data")
//     redisClient.set(keyName, JSON.stringify(result), {EX: 30})
//     // resArray = result
//   }
//   res.json({msg: "implement redis", resArray})
// })

app.listen(port, () => {
  console.log('Server running on port', port);
});

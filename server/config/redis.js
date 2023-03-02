const redis = require('redis');

const redisClient = () => {
  const redisClient = redis.createClient(6379, '127.0.0.1');
  
  redisClient.on('connect', function () {
    console.log('Redis client connected');
  });
  
  redisClient.on('error', function (err) {
    console.error('Redis error: ', err);
  });

  return redisClient;
};

module.exports = redisClient;
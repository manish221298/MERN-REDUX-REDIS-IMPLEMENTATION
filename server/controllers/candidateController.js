const { json } = require("express");
const redis = require("redis");
// const redisClient = redis.createClient();
const Candidate = require("../models/candidateModel");
const candidateController = {};
const redisClient = redis.createClient(6379, "127.0.0.1");
redisClient.connect();

//Create Canidate
candidateController.create = async (req, res) => {
  const body = req.body;

  try {
    const isEmailDuplicate = await Candidate.findOne({ email: body.email });
    if (isEmailDuplicate) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const isPhoneDuplicate = await Candidate.findOne({ phone: body.phone });
    if (isPhoneDuplicate) {
      return res.status(400).json({ error: "Phone number already exists" });
    }

    const candidate = new Candidate(body);
    await candidate.save();

    // Set the candidate data in Redis
    redisClient.set(
      "candidate:" + candidate._id,
      JSON.stringify(candidate),
      "EX",
      3600,
      (err, result) => {
        if (err) {
          console.error("Redis set error: ", err);
        }
        console.log("redis data", result);
      }
    );

    res.status(200).json({ data: candidate, msg: "added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "server error" });
  }
};

candidateController.list = async (req, res) => {
  const { page, limit } = req.query;
  const skipIndex = (page - 1) * limit;

  try {
    let keyName = `candidatelist:${page}:${limit}`;

    let cacheData = await redisClient.get(keyName);

    if (cacheData) {
      let data = JSON.parse(cacheData);
      console.log("data from INSIDE REDIS");
      res.status(200).json(data);
    } else {
      const data = await Candidate.aggregate([
        {
          $sort: { createdAt: -1 },
        },
        {
          $skip: Number(skipIndex),
        },
        {
          $limit: Number(limit),
        },
      ]);
      redisClient.set(keyName, JSON.stringify(data), { EX: 300 });
      console.log("data from inside db");
      res.status(200).json(data);
    }
  } catch {
    console.log({ err: "server error" });
  }
};

module.exports = candidateController;

const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const mongo_url = process.env.ATLASDB_URL

main()
    .then((res)=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    });
const initDB =async ()=>{
    await Listing.deleteMany({});
    let seedData = initData.data.map((obj)=>({...obj,owner:'6831bc69f51a031adc23fc5c'}))
    await Listing.insertMany(seedData);
    console.log("data was initialized")
}

async function main() {
    await mongoose.connect(mongo_url);
    await initDB();
}

const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");

const mongo_url = 'mongodb://127.0.0.1:27017/wonderlust';

main()
    .then((res)=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(err);
    });
const initDB =async ()=>{
    await Listing.deleteMany({});
    let seedData = initData.data.map((obj)=>({...obj,owner:'682ea3c3d706e818c60a9418'}))
    await Listing.insertMany(seedData);
    console.log("data was initialized")
}

async function main() {
    await mongoose.connect(mongo_url);
    await initDB();
}

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review")

const default_img = "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?...";

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
       url:String,
       filename:String,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      // required: true
    },
    coordinates: {
      type: [Number],
      // required: true
    }
  },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner:
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        },
    
}, { timestamps: true });

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}})
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

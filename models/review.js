const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: [true, "Review comment is required."],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Rating is required."],
        min: [1, "Rating must be at least 1."],
        max: [5, "Rating must be at most 5."],
    },
    authore:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Review", reviewSchema);

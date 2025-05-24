const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews")
    const review = new Review(req.body.review);
    review.authore = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash("success","Review submited sucessfully!")
    res.redirect(`/listings/${id}`)
}

module.exports.destroyReview = async(req,res)=>{
    let{id,review_id}= req.params;
    let result1 = await Listing.findByIdAndUpdate(id,{$pull:{reviews:review_id}})//pull method in mongodb
    let result= await Review.findByIdAndDelete(review_id)
    console.log(result,result1)
    req.flash("success","Review deleted!")
    res.redirect(`/listings/${id}`)
}

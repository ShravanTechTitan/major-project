const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const { listingSchema,reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");


module.exports.isLoggedIn = (req,res,next)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl
        req.flash("error","you must be login to create listing!")
        return res.redirect("/login");
    }
    next();
}
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    const { id } = req.params;
    let listing = await Listing.findById(id)
    if(res.locals.currUser && !listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","you are not owner of this listing")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

// Validation middleware
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errmsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errmsg);
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errmsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errmsg);
    }
    next();
};

module.exports.isReviewsAuthore= async(req,res,next)=>{
    let{id,review_id}= req.params;
    let review = await Review.findById(review_id)
    if(res.locals.currUser && !review.authore._id.equals(res.locals.currUser._id)){
        req.flash("error","you are not authore of this review")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

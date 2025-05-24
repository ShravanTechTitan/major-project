const express = require("express");
const router = express.Router({mergeParams:true});
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapasync.js");
const {validateReview, isLoggedIn, isReviewsAuthore} = require("../middleware.js");
const { destroyReview, createReview } = require("../controllers/reviews.js");


// Review routes
router.post("/", isLoggedIn,validateReview, wrapAsync(createReview));

// delete review
router.delete("/:review_id",isLoggedIn,isReviewsAuthore,wrapAsync(destroyReview))

module.exports=router;
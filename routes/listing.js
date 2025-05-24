const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const multer  = require('multer')
const {storage} =require("../cloudConfig.js")
const upload = multer({ storage})


const listingController = require("../controllers/listing.js")

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        upload.single('listing[image]'), 
        validateListing,
        wrapAsync(listingController.createListing)
        );

//new route
router.get("/new", isLoggedIn, listingController.rendreNewForm);



router
        .route("/:id")
        .get(wrapAsync(listingController.showListing))
        .put(
            isLoggedIn,isOwner,
            upload.single('listing[image]'), 
            validateListing,
            wrapAsync(listingController.updateListing))
        .delete(
            isLoggedIn,
            isOwner,
            wrapAsync(listingController.destroyListing));



//edit route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditFrom));

module.exports=router;

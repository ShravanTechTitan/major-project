if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

console.log(process.env.SECERET)

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user.js");





//router
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");


// Utils
const ExpressError = require("./utils/ExpressError.js");
const cookieParser = require("cookie-parser");

// MongoDB connection
const dbUrl = process.env.ATLASDB_URL;



mongoose.connect(dbUrl)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

const app = express();

const secret = process.env.SECRET
const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:secret
    },
    touchAfter:24*3600
});

const sessionOptions = {
    store,
    secret:secret,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httponly:true,
    }
}
store.on("error",()=>{
    console.log("ERROR IN MONGODB SESSION",err)
})



// View engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionOptions));
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.sucess = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/listings",listingRouter)
app.use("/listings/:id/reviews",reviewRouter)
app.use("/",userRouter)



// Home
app.get("/", (req, res) => {
    res.redirect("/listings");
});




// 404 Handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Error handler
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    res.status(statusCode).render("error.ejs", { err });
});

// Server listener
app.listen(8080, () => {
    console.log("🚀 Server is listening on port 8080");
});

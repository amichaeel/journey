const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("api");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../../client/"));
// });

router.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

module.exports = router;

var path = require("path");

module.exports = function (app) {
    // profile route loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
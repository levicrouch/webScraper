// Requiring our models
var db = require("../models");

// var axios = require("axios");
// var cheerio = require("cheerio");

module.exports = function (app) {
    app.get("/api/articles", function (req, res) {
        db.Article.find().then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.post("/api/article", function (req, res) {
        db.Article.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });
    // app.get("/api/scrape", function (req, res) {
    //     // First, we grab the body of the html with request
    //     axios.get("http://www.reddit.com/r/webdev/").then(function (response) {
    //         // Then, we load that into cheerio and save it to $ for a shorthand selector
    //         var $ = cheerio.load(response.data);

    //         // Now, we grab every h2 within an article tag, and do the following:
    //         $("article h2").each(function (i, element) {
    //             // Save an empty result object
    //             var result = {};

    //             // Add the text and href of every link, and save them as properties of the result object
    //             result.title = $(this)
    //                 .children("a")
    //                 .text();
    //             result.link = $(this)
    //                 .children("a")
    //                 .attr("href");

    //             // Create a new Article using the `result` object built from scraping
    //             db.Article.create(result)
    //                 .then(function (dbArticle) {
    //                     // View the added result in the console
    //                     console.log(dbArticle);
    //                 })
    //                 .catch(function (err) {
    //                     // If an error occurred, send it to the client
    //                     return res.json(err);
    //                 });
    //         });

    //         // If we were able to successfully scrape and save an Article, send a message to the client
    //         res.send("Scrape Complete");
    //     });
    // });
};
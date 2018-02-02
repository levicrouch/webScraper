$(document).ready(function () {
    // On click hide login screen to begin
    toggleElement(".article-dest", "hide");

    // event listner to grab articles from database
    $(".btn").on("click", function (event) {
        event.preventDefault();
        getArticles();
        toggleElement(".article-dest", "show");
    });

    function toggleElement(element, value) {
        // show the element
        if (value === "show") {
            if (readAttr(element, "data-visible") === "not-set" || readAttr(element, "data-visible") === "hidden") {
                // Set attribute "data-visible" to visible
                setAttr(element, "data-visible", "visible");
                // show the element
                $(element).show();
            }
        }
        // hide the element
        if (value === "hide") {
            if (readAttr(element, "data-visible") === "not-set" || readAttr(element, "data-visible") === "visible") {
                // Set attribute "data-visible" to hidden
                setAttr(element, "data-visible", "hidden");
                // hide the element
                $(element).hide()
            }
        }

    }
    function readAttr(target, attr) {
        var readData = $(target).attr(attr);
        return readData
    }

    function setAttr(target, attr, val) {
        var setTargetData = $(target).attr(attr, val);
    }

    function setText(target, val) {
        var setTargetData = $(target).text(val);
    }

    function getArticles() {
        // grabs articles from reddit
        $.get("/api/articles/", function (data) {
            articles = data;
            // if (!activities || !activities.length) {
            //     displayEmpty();
            // }
            // else {
                initializeRows();
        });
    }

    function initializeRows() {
        // InitializeRows handles appending all of our constructed post HTML inside blogContainer
        $(".article-data").empty();
        var articlesToAdd = [];
        for (var i = 0; i < articles.length; i++) {
            articlesToAdd.push(createNewRow(articles[i]));
        }
        $(".article-data").append(articlesToAdd);
    }

    function createNewRow(article) {
        // creates new td's within the row with data from the current activity object
        // var momentTime = moment(activity.totalActivityTime).format("mm");
        $(".article-table").find(".article-data").append($("<tr>").append
            ($("<td>").append(article._id),
            $("<td>").append(article.title),
            $("<td>").append(article.link)
            )
        );
    }


});
$(function() {

var topics = ["Spike", "Willow", "Buffy", "Xander", "Giles", "slaying", "Anya", "Anyanka", "Tara", "Joyce", "Angel", "Cordelia", "Parker", "Oz", "Faith"];

function create() {
    
    for (i=0; i < topics.length; i++) {

    var button = $("<button>")

    button.text(topics[i])

    $("#buttons").append(button);

}

}

create();

var query;

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cqvd7dfuQogEffYZG7FyYxZHBWtlG86P&q=" + query + "&limit=10&offset=0&rating=PG-13&lang=en";

$("#buttons").on("click", "button", function() {

    
    query = $(this).text();

    console.log(query);

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"


    }).then(function(response) {

        var results = response.data;

        for (i=0; i < results.length; i++) {

        var gifDiv = $("<div>");

        var p = $("<p>");

        p.text("Rating: " + (results[i].rating));

        var image = $("<img>");

        image.attr("src", results[i].images.fixed_height_still.url);

        gifDiv.append(p);
        gifDiv.append(image);

        $("#image-container").prepend(gifDiv);


        }


    })


})

});

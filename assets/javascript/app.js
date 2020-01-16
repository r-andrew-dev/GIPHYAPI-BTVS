$(function() {

var topics = ["Buffy Summers", "Spike", "Willow Rosenberg", "Xander Harris", "Giles", "Anyanka", "Tara", "Joyce Summers", "Angelus", "Oz", "Faith"];

function create() {
    
    for (i=0; i < topics.length; i++) {

    var button = $("<button>")

    button.text(topics[i])

    $("#buttons").append(button);

}

}

create();

$("#buttons").on("click", "button", function() {
    
    var query = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cqvd7dfuQogEffYZG7FyYxZHBWtlG86P&q=" + 
                    query + " btvs&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"


    }).then(function(response) {

        $("#image-container").html(" ");

        var results = response.data;

        for (i=0; i < results.length; i++) {

        var gifDiv = $("<div>");

        var p = $("<p>");

        p.text("Rating: " + (results[i].rating));

        var image = $("<img>");

        image.attr("src", results[i].images.fixed_height_still.url);

        image.attr("data-state", "still")

        image.attr("data-animate", results[i].images.fixed_height.url);

        image.attr("data-still", results[i].images.fixed_height_still.url);

        image.addClass("gif");

        gifDiv.append(p);
        gifDiv.append(image);

        $("#image-container").prepend(gifDiv);


        }


    })


})

$("#image-container").on("click", ".gif", function() {

    console.log(this);

    if ($(this).attr("data-state") === "still") {

        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");

        console.log($(this).attr("data-animate"));

    }
    else {

        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }


})

});

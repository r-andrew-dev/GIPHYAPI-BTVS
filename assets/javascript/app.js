$(function() {

var button;

var topics = ["buffy", "spike", "willow", "xander", "giles", "anyanka", "tara", "joyce", "angelus", "oz", "faith"];

function create() {
    
    for (i=0; i < topics.length; i++) {

    button = $("<button>")

    button.text(topics[i])

    $("#buttons").append(button);

}

}

create();

$("#buttons").on("click", "button", function() {
    
    var query = $(this).text().toLowerCase();

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cqvd7dfuQogEffYZG7FyYxZHBWtlG86P&q="
     + query + " buffy&limit=10&offset=0&rating=PG-13&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"


    }).then(function(response) {

        $("#image-container").html(" ");

        var results = response.data;

        for (i=0; i < results.length; i++) {

        var gifDiv = $("<div>");

        var p = $("<p>");

        var rating = results[i].rating

        var newRating = rating.toUpperCase()

        p.text("Rating: " + (newRating));

        var image = $("<img>");

        image.attr("src", results[i].images.fixed_height_still.url);

        image.attr("data-state", "still")

        image.attr("data-animate", results[i].images.fixed_height.url);

        image.attr("data-still", results[i].images.fixed_height_still.url);

        image.addClass("gif");

        gifDiv.append(image);
        gifDiv.append(p);

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

$(".submit").on("click", function() {
    event.preventDefault();
    var buttonText = $(".search").val().trim().toLowerCase();

    if (topics.indexOf(buttonText) > -1) {

        console.log(topics.indexOf(buttonText))
        return "This button has already been added."
    }

    else {

    topics.push(buttonText);
    $(".search").val("");
    $("#buttons").empty();
    create();
    console.log(topics.indexOf("buffy"));

    }


});




});

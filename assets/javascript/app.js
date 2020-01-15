$(function() {

var topics = ["Spike", "Willow", "Buffy", "Xander", "Giles", "slaying", "Anya", "Anyanka", "Tara", "Joyce", "Angel", "Cordelia", "Parker", "Oz", "Faith"];

function create() {
    
    for (i=0; i < topics.length; i++) {

    var button = $("<button>")

    button.text(topics[i])

    $("#container").append(button);

}

}

create();

var queryURL = https://api.giphy.com/v1/gifs/search?api_key=cqvd7dfuQogEffYZG7FyYxZHBWtlG86P&q=buffy&limit=10&offset=0&rating=PG&lang=en

var query = 

$("#container").on("click", "button", function() {

    $.ajax({
        url: queryURL;
        method: "GET"


    }).then(function(response) {


    }


})

});

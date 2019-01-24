'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
        $('.jumbotron h1').toggleClass("active");
        $(".jumbotron p").toggleClass("active");
        $("#testjs").toggleClass("movement");
        if ($("#testjs").text() == "Click Me!") {
            $("#testjs").text("Click Me Again!");
        } else {
            $("#testjs").text("Click Me!");
        }

	});
    $("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
    // prevent the page from reloading    
    console.log("Project Click");  
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#E317FF");
}
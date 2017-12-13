$(document).ready(function(){
   // In jQuery: Make the image element appear and disappear when you click the corresponding button.
    $(".hide").click(function(){
        $("img").hide();
    });
    // My image comes out from hiding
     $(".show").click(function(){
        $("img").show();
    });
     // Make the appearance of the h1 switch between two styles when it is Double Clicked (ie: when double clicked, change background color from red to blue).
	  var divdbl = $( "div:first" );
		divdbl.dblclick(function() {
 		divdbl.toggleClass( "dbl" );
	});
	// Add li elements with content to the end of the list when the button is clicked.
      $(".btn").click(function(){
        $("ul").append("<li>Kenechi is the BEST!</li>");
    });
  	// Change the appearance of a div when you (the user) hover over it.
  	$(".divdog").hover(function() {
  		$(this).css("background-color", "blue");
  		}, function () {
  		$(this).css("background-color", "green");
  	});
  	// In jQuery: Make the h2 element slide up when your mouse leaves the element.
  	// In jQuery: Have this div fade away when you hover over it, and make it come back when you click a button.
  	// Make the font of some text change when you hover over it.
});


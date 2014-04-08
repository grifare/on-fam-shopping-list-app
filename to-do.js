// JavaScript Document
/*
 * Author name    : Armagan Tekdoner
 * Student Number : 200253439
 * Assignment Name: To Do List Web App
 * Instructor     : Derek Buttineau
 * Date           : April 2014
 * File name      : to-do.js
 */
/*
,---.|             |o      ,---.     o ,---.              
`---.|--- .   .,---|.,---. |  _.,---.. |__.,---.,---.,---.
    ||    |   ||   |||   | |   ||    | |   ,---||    |---'
`---'`---'`---'`---'``---' `---'`    ` `   `---^`    `---'  
*/
// general functionalities
  // stores the current year in a variable
  var currentYear = (new Date).getFullYear();
  
  // stores the current date and time in a variable
  var dNow = new Date();
  var dateAndTime= (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
  
  // unchecks checked checkboxes upon refresh
  $(document).ready(function(){
	 $('input:checkbox').removeAttr('checked');
  });
  
  //Printer is accessed
  function printList(){
	   window.print();
  }  

// screens with a width smaller than 481px cannot use the app
  var width = $(window).width();
  var height = $(window).height();
  if ( width < 481 ) {
	  document.write('<body><a href="http://www.grifare.info" target="_blank"><img src="images/sgf-logo.png" alt="studio gri fare" /></a><h1>Uh-oh!<br />This screen size is not compatible with the requested app!</h1></body>');
  }


var helpText =

// general functionalities end


$(document).ready(function(){
	// shows and hides the help section using fade
	$('header span:nth-of-type(3)').click(function(){
		$('aside div:first-of-type').fadeIn( 500 );
	});	
	$('aside div:first-of-type button').click(function(){
		$('aside div:first-of-type').fadeOut( 800 );
	});

	// changes the text on the element that triggers the event, bacj and forth
	$( "span.video" ).click(function() {
	  $( "span.video" ).toggle();
	});
	// when there is no video on the screen
	$('span.video:contains("How")').click(function(){
		// shows the hidden div container
		$('aside div:last-of-type').show();
		// creates the iframe
		$('aside div:last-of-type').append("<iframe src='documents/to-do.mp4'></iframe>");
		//$('aside div:last-of-type').append("<video controls><source src='documents/to-do.mp4' type='video/mp4'></video>");
	});
	// when there is video on the screen	
	$('span.video:contains("Remove")').click(function(){
		// hides the div container again		
		$('aside div:last-of-type').hide();
		// deletes the iframe		
		$('iframe').remove();
		//$('video').remove();					
	});
});// close doc dot ready

/* application section */
// lists of frequently purchased items as ARRAYS
var walMmartItems = new Array(
  "Water",
  "Fruit Juice",
  "Snacks",  
  "Coffee",
  "Tea",
  "Canned Food",
  "Oil",  
  "Detergent",
  "Cleaning chemicals",
  "Toilet Paper",
  "Clothing", 
  "DVD - CD"
);

var foodBasicsItems = new Array(
  "Fruits",
  "Fruit Juice",
  "Vegetables",  
  "Water",
  "Poultry",
  "Meat",
  "Canned Food",
  "Jarred Food",  
  "Olives",
  "Rice",
  "Bread",     
  "Pasta"
);

var zehrsItems = new Array(
  "Pork Meat",
  "Lamb Meat",
  "Chicken",  
  "Turkey",
  "Sea Food",
  "Salami",
  "Saucisson",  
  "Olives from Bar",
  "Cheese",
  "Exotic Tea",
  "Frozen Food",     
  "Bread"
);

var canadianTireItems = new Array(
  "Windshield Washer",
  "Check Light Bulbs",
  "Check Boots",  
  "Charcoal",
  "Storage Cups",
  "Barbecue-related",
  "Gardening",  
  "Cleaning Products",
  "Outdoor",
  "Oil Change",    
  "Anything cheap?",
  "Car maintenance?"
);

var beerStoreItems = new Array(
  "Pilsner",
  "Sleeman",
  "Stella Artois",  
  "Carlsberg",
  "Hefeweizen",
  "Ouzo",
  "Wine",  
  "Whiskey",    
  "Vodka",
  "Gin",
  "Champagne",
  "Cognac"      
);

var homeDepotItems = new Array(
  "Windshield Washer",
  "Batteries",
  "Charcoal",
  "Decor",
  "Barbecue-related",
  "Gardening",  
  "Repair &amp; Prepare",
  "Outdoors",
  "Check Tools",
  "Check Furniture",
  "Check Light Bulbs",
  "Anything cheap?"
);



// displays or hides a placeholder for frequently attended stores
$( document ).ready(function() {
	$("input:checkbox[value=wal-mart]").click(function () {
		if(this.checked) {
		  $("section:first-of-type ol:nth-of-type(1)").show();
		}else{
		  $("section:first-of-type ol:nth-of-type(1)").hide();			
		}
	});
	$("input:checkbox[value=food-basics]").click(function () {
		if(this.checked) {
		  $("section:first-of-type ol:nth-of-type(2)").show();
		}else{
		  $("section:first-of-type ol:nth-of-type(2)").hide();			
		}
	});
	$("input:checkbox[value=zehrs]").click(function () {
		if(this.checked) {
		  $("section:first-of-type ol:nth-of-type(3)").show();
		}else{
		  $("section:first-of-type ol:nth-of-type(3)").hide();			
		}
	});
	$("input:checkbox[value=canadian-tire]").click(function () {
		if(this.checked) {
		  $("section:first-of-type ol:nth-of-type(4)").show();
		}else{
		  $("section:first-of-type ol:nth-of-type(4)").hide();			
		}
	});
	$("input:checkbox[value=beer-store]").click(function () {
		if(this.checked) {
		  $("section:first-of-type ol:nth-of-type(5)").show();
		}else{
		  $("section:first-of-type ol:nth-of-type(5)").hide();			
		}
	});
	$("input:checkbox[value=home-depot]").click(function () {
		if(this.checked) {
		  $("section:first-of-type ol:nth-of-type(6)").show();
		}else{
		  $("section:first-of-type ol:nth-of-type(6)").hide();			
		}
	});	  
});// close doc dot ready


// functions to enlist usually purchased items on the left, inside the placeholders provided above
function listWalMmartItems(){
  document.write('<span><u>Wal-Mart</u></span><li>'+walMmartItems.join('</li><li>')+'</li>');
}

function listFoodBasicsItems(){
  document.write('<span><u>Food Basics</u></span><li>'+foodBasicsItems.join('</li><li>')+'</li>');
}

function listZehrsItems(){
  document.write('<span><u>Zehrs</u></span><li>'+zehrsItems.join('</li><li>')+'</li>');
}

function listCanadianTireItems(){
  document.write('<span><u>Canadian Tire</u></span><li>'+canadianTireItems.join('</li><li>')+'</li>');
}

function listBeerStoreItems(){
  document.write('<span><u>Beer S./LCBO</u></span><li>'+beerStoreItems.join('</li><li>')+'</li>');
}

function listHomeDepotItems(){
  document.write('<span><u>Home Depot</u></span><li>'+homeDepotItems.join('</li><li>')+'</li>');
}


// functions to enlist required items on the right inside tables, by creating their own table elements
$(document).ready(function(){
	// assigns a unique click counter to each store
	var clickWalMart = clickFoodBasics = clickZehrs = clickCanadianTire = clickBeerStore = clickHomeDepot = 0;	
	
	// selects the li using DOM selectors - SOURCE
	$ ( 'section > ol:nth-of-type(1) > li' ).click(function() {
	// prevents the title from being reposted at each click	
	clickWalMart++;
	  // assigns a number to the clicked li
	  var i = $(this).index()-1;
	  // prints the store name in a th at the first click
	  if ( clickWalMart == 1 ){
		$("<caption>Wal-Mart</caption>").appendTo( 'section:last-of-type table:nth-of-type(1)' );
	  }
	  // prints the chosen item inside a tr	- DESTINATION
 	  $('section:last-of-type table:nth-of-type(1)').each(function(){
        $(this).append("<tr><td class='item' title='click to edit'>" + walMmartItems[i-1] + "</td><td title='purchased'>&#10004;</td><td title='remove item'>&#10008;</td></tr>");
      });
    });

	// selects the li using DOM selectors - SOURCE
	$ ( 'section > ol:nth-of-type(2) > li' ).click(function() {
	// prevents the title from being reposted at each click	
	clickFoodBasics++;		
	  // assigns a number to the clicked li
	  var i = $(this).index()-1;
	  // prints the store name in a th at the first click
	  if ( clickFoodBasics == 1 ){
		$( 'section:last-of-type table:nth-of-type(2)' ).append("<caption>Food Basics</caption>");	  	  
	  }
	  // prints the chosen item inside a tr	- DESTINATION
 	  $( 'section:last-of-type table:nth-of-type(2)' ).each(function(){
        $(this).append("<tr><td class='item' title='click to edit'>" + foodBasicsItems[i-1] + "</td><td title='purchased'>&#10004;</td><td title='remove item'>&#10008;</td></tr>");
      });
    });

	// selects the li using DOM selectors - SOURCE
	$ ( 'section > ol:nth-of-type(3) > li' ).click(function() {
	// prevents the title from being reposted at each click	
	clickZehrs++;		
	  // assigns a number to the clicked li
	  var i = $(this).index()-1;
	  // prints the store name in a th at the first click
	  if ( clickZehrs == 1 ){
		$( 'section:last-of-type table:nth-of-type(3)' ).append("<caption>Zehrs</caption>");	  	  
	  }
	  // prints the chosen item inside a tr	- DESTINATION
 	  $( 'section:last-of-type table:nth-of-type(3)' ).each(function(){
        $(this).append("<tr><td class='item' title='click to edit'>" + zehrsItems[i-1] + "</td><td title='purchased'>&#10004;</td><td title='remove item'>&#10008;</td></tr>");
      });
    });

	// selects the li using DOM selectors - SOURCE
	$ ( 'section > ol:nth-of-type(4) > li' ).click(function() {
	// prevents the title from being reposted at each click	
	clickCanadianTire++;		
	  // assigns a number to the clicked li
	  var i = $(this).index()-1;
	  // prints the store name in a th at the first click
	  if ( clickCanadianTire == 1 ){
		$( 'section:last-of-type table:nth-of-type(4)' ).append("<caption>Canadian Tire</caption>");	  	  
	  }
	  // prints the chosen item inside a tr	- DESTINATION
 	  $( 'section:last-of-type table:nth-of-type(4)' ).each(function(){
        $(this).append("<tr><td class='item' title='click to edit'>" + canadianTireItems[i-1] + "</td><td title='purchased'>&#10004;</td><td title='remove item'>&#10008;</td></tr>");
      });
    });
	
	// selects the li using DOM selectors - SOURCE
	$ ( 'section > ol:nth-of-type(5) > li' ).click(function() {
	// prevents the title from being reposted at each click	
	clickBeerStore++;		
	  // assigns a number to the clicked li
	  var i = $(this).index()-1;
	  // prints the store name in a th at the first click
	  if ( clickBeerStore == 1 ){
		$( 'section:last-of-type table:nth-of-type(5)' ).append("<caption>Beer Store</caption>");	  	  
	  }
	  // prints the chosen item inside a tr	- DESTINATION
 	  $( 'section:last-of-type table:nth-of-type(5)' ).each(function(){
        $(this).append("<tr><td class='item' title='click to edit'>" + beerStoreItems[i-1] + "</td><td title='purchased'>&#10004;</td><td title='remove item'>&#10008;</td></tr>");
      });
    });
	
	// selects the li using DOM selectors - SOURCE
	$ ( 'section > ol:nth-of-type(6) > li' ).click(function() {
	// prevents the title from being reposted at each click	
	clickHomeDepot++;		
	  // assigns a number to the clicked li
	  var i = $(this).index()-1;
	  // prints the store name in a th at the first click
	  if ( clickHomeDepot == 1 ){
		$( 'section:last-of-type table:nth-of-type(6)' ).append("<caption>Home Depot</caption>");	  	  
	  }
	  // prints the chosen item inside a tr	- DESTINATION
 	  $( 'section:last-of-type table:nth-of-type(6)' ).each(function(){
        $(this).append("<tr><td class='item' title='click to edit'>" + homeDepotItems[i-1] + "</td><td title='purchased'>&#10004;</td><td title='remove item'>&#10008;</td></tr>");
      });
    });		

});// close doc dot ready

	
$(document).ready(function(){
		
// section for editing
	// selects td's with item class
	$('section:last-of-type table').on('click', '[class="item"]', function(e){
		// inserts a text field there
		$(this).replaceWith('<td><input type="text" name="edit" title="click inside the field to type then click outside the field to resume" maxlength="40" size="20" /></td>');
	});		

	// posts the entered text	
	$('section:last-of-type').on('focusout', 'input[name="edit"]', function(e){
		// stores the currently entered value of the selected element
		var edited_item = $( 'input[name="edit"]' ).val();
		
		//check if empty					
		if ( edited_item == "" ){
				// when nothing is entered after clicking in the field, a dialogue is presented
				if(confirm('No change? Click ok to remove field click cancel to fill-in.')){
				   $(this).closest('tr').remove();
				};			
		  }			
		  else {
			// edited items listed
			$(this).replaceWith( "<span title='cannot be edited'>"+edited_item+"</span>" );						
		  }
	});
	
// section for removals
	$('section:last-of-type table').on('click', '[title="remove item"]', function(e){
				// $(this).parent().remove();
		// for dynamically created td's
		$(this).closest('tr').remove();		
	});
	
// section for purchased items
	$('section:last-of-type table').on('click', '[title="purchased"]', function(e){
	// Mark item as purchased when clicked.	
		$(this).prev('td').css( "text-decoration","line-through" );
		$(this).text("PURCHASED");		
	});
	
// section for posting the entered text for extra items
	// posts input when user hits enter	
	$( 'input[name="extra"]' ).keypress(function( event ) {
	  if ( event.which == 13 ) {
		// event.preventDefault();
		var extra_item = $( 'input[name="extra"]' ).val();
		if ( extra_item == "" ){
		  // when nothing is entered after clicking in the field, a dialogue is presented
		  alert('No extra items?');			
		  }			
		  else {
			$('section:last-of-type div').show();
			// extra items listed
			$('<ul><li title="drop item" style="cursor: pointer;">'+extra_item+'</li></ul>').appendTo('section:last-of-type div');
		  } 
	  }
	});	
	
// section for removals of extra items
	$('section:last-of-type').on('click', 'li', function(e){
		// Remove added list item
		$(this).remove();
	});	
	
});// close doc dot ready

// reset warning
     window.onbeforeunload = function(){ return 'This will clear the list!';}
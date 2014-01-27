//alert("Hello!");

// alert() --> function: just a piece of code that is reusable
// 'Hello!' --> string: just a piece of text

// alert(42); // --> you can perform math
// alert(14 + 6); // --> will output 20
// alert('14' + '6') // --> will not perform math


// alert(true);
// alert(false);

/* var myName = 'Robert';
alert(myName);

var myAge = 30;
var isGuy = true;

alert(myAge + 5); // 35
alert(myName + ' Freeman');

var lastName = 'Freeman';
alert(myName + ' ' + lastName);

var fullName = myName + ' ' + lastName;

//if statement
//allows you to do one thing or another

if (myName == Robert) {
	// the true path
	// == compares, 
	// = sets
	alert('This is true!')
} else {
	// the false path
	alert('this is false!')

}

var answer = prompt('Are dinosaurs amazing?');
//alert(answer);

if (answer == 'Yes') {
	alert('Glad to hear it!');

}else{
	alert('Leave now!');
}






// loops allow code to run multiple times

var counter = 0; // often this variable is just called 'i'

for (counter = 0; counter < 10; counter++) {
	//this code will happen multiple times
	//++ to count up, -- to count down
	console.log('hey!');
	console.log(counter);
	
}



// Array: a variable that contains a collection of data
//counts starting at 0, 1, 2 etc

var dinos = ['T-Rex', 'Stegasaurus', 'Dimetrodon', 'Pteranadon'];  

//get outs an item from an array

console.log(dinos[2]); //dimetrodon
console.log(dinos[0]); //t-rex

var rand = ['Robert', 32, true, [2,3,4], fullName];

//adds an item to the array

dinos.push('Triceratops');

//removes on item from the end
//dinos.pop()

//dinos.shift() -->removes from start

//dinos.unshift() -->adds to the start

var i = 0;

var total = dinos.length // counts how many items are in the array

for (i = 0, i <; i++) {
	document.write('<h1>' + dinos[i] + '</h1>');
}


//objects: a collection of variables
var trex = {
	name: 'T-Rex',
	size: 'Big',
	arms: 'Small',
	age: 1000000000,
	isMeatEater: True,
	colours: ['Black', 'White', 'Grey']
};

console.log( trex.name );



// $('.ball').fadeout();

var $ball = $('.ball');

$('#btn-right').on('click', function () {

	var newLeft = $ball.left = $ball.offset().left + 10;

	$ball.css('left', newleft);

});

$('#btn-left').on('click', function () {

	var newRight = $ball.right = $ball.offset().right + 10;

	$ball.css('left', newleft);

});

$('#btn-up').on('click', function () {

	var newDown = $ball.down = $ball.offset().down + 10;

	$ball.css('down', newdown);

});

$('#btn-down').on('click', function () {

	var newUp = $ball.up = $ball.offset().up + 10;

	$ball.css('up, newup);

});


*/

var $items = $('.items img')

var switchItem = function (current, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(current).hide().attr('data-state', '')
		$items.eq(incoming).attr('data-state', 'current')	
	});
};


$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function() {
	var current = $items.filter('[data-state="current"]').index();
	var next = current +1;

	if (next > $items.length - 1) {
		next = 0;
	}

	switchItem(current, next);
})



$items.filter(':not([data-state="current"])').hide();

$('.previous').on('click', function() {
	var current = $items.filter('[data-state="current"]').index();
	var previous = current -1;



	switchItem(current, previous);
});

var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/81418107?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	/*
	when triggering built in javascript functions we need to bypass jquery in th order to get to the raw javascript elements we can use .get()

	example:
	$videoDialog.show() will trigger jquerys show function not the raw java script
	*/
	$videoDialog.get(0).showModal(); 
	/*.show() allows user to interact with stuff behind the dialog,
	.showModal() disables user interaction behind the dialog */


});


$('.btn-close').on('click', function () {

	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});





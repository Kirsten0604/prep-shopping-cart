window.onload = function(){};

var cartItems =[
  {"image": "images/Jello-Shots.jpg", "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, },
  { "image": "images/cat.jpg", "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  {"image": "images/imgres.jpg", "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "image": "images/cookiedough.jpg","name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "image": "images/Capture.PNG","name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "image": "images/mustache.jpg","name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

var containerElement = document.getElementById('container');

var stuff = "";
var choice = function(counter){
	for (var i=0; i<=10; i++){
		stuff += "<option>" + i + "</option>";
		return stuff[i];
	} 

};

for (var i=0; i<cartItems.length; i++){

	
	console.log(cartItems[i].image);


var divItem = document.createElement('div');
	divItem.className = ('name');
	divItem.innerHTML=cartItems[i].name;
	containerElement.appendChild(divItem);



var divImage = document.createElement('div');
	divImage.className = ('image');
	divImage.innerHTML = "<img src=" + cartItems[i].image + ">";
	document.getElementsByClassName('name')[i].appendChild(divImage);

var divDescription = document.createElement('div');
	divDescription.className = ('description');
	divDescription.innerHTML=cartItems[i].description;
	document.getElementsByClassName('name')[i].appendChild(divDescription);

var dropDown = document.createElement('select');
	dropDown.className = ('dropDown');
	dropDown.innerHTML = stuff;
	document.getElementsByClassName('name')[i].appendChild(dropDown);
	


var divPrice = document.createElement('div');
	divPrice.className = ('price');
	divPrice.innerHTML= "$ " + cartItems[i].price;
	document.getElementsByClassName('name')[i].appendChild(divPrice);


var divLine = document.createElement('div');
	divLine.className = "line";
	divLine.innerHTML = '';
	document.getElementsByClassName('name')[i].appendChild(divLine);
} 

var subtotal = document.createElement('div');
	subtotal.className = ('subtotal');
	subtotal.innerHTML="<p>Subtotal</p>";
	containerElement.appendChild(subtotal);

var total = document.createElement('div');
	total.className = ('total');
	total.innerHTML = "$ " + 0;
	containerElement.appendChild(total);





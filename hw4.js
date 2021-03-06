// Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.


var athlete1 = {};

athlete1.name = 'John Tan';
athlete1.height = '5\'6\"';
athlete1.age = 30;
athlete1.countryOfOrigin = 'China';
athlete1.medals = ['Gold'];
athlete1.isOlympian = true;
athlete1.introduce = function() {
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.countryOfOrigin + '.'
};
athlete1.addMedal = function(add) {
	this.medals.push(add);
}; // This method adds the string parameter to the array. However, when I call this method, I get an undefined response on the console, but the string did get added to the array.

//JG: I see your comment about getting undefined when you call addMedal. That's expected.
//JG: addMedal doesn't have a return statement. Thus, it simply returns undefined.
//JG: You could write it so that it returns the medals array, but I'm not sure if there would be a benefit
//JG: to that. Not all functions have to return values.

// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).

var athlete2 = {};

athlete2['name'] = 'Sam Weiss';
athlete2['height'] = '5\'10\"';
athlete2['age'] = 25
athlete2['countryOfOrigin'] = 'United States';
athlete2['medals'] = ['Silver'];
athlete2['isOlympian'] = true;
athlete2['introduce'] = function() {
	//JG: Easy mistake to overlook (using associative array for "this" properties)
	return 'Hello! My name is ' + this['name'] + ' and I am from ' + this['countryOfOrigin'] + '.'
};
athlete2['addMedal'] = function(add) {
	this['medals'].push(add);
}; // Samething here.


// Problem 3
// Create the same object using ONE object literal


var athlete3 = {
	// set key/value pairs inside here
	name: 'Amy Taylor',
	height: '5\'8\"',
	age: 20,
	countryOfOrigin: 'Canada',
	medals: ['Bronze'],
	isOlympian: true,
	introduce: function() {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.countryOfOrigin + '.'
	},
	addMedal: function(add) {
		this.medals.push(add)
	}
};


// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

//JG: Remember to use a capital letter for prototype definitions
function Athlete(name, height, age, countryOfOrigin, medals, isOlympian) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.countryOfOrigin = countryOfOrigin;
	this.medals = medals;
	this.isOlympian = isOlympian;
	this.introduce = function() {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.countryOfOrigin + '.'
	}
	this.addMedal = function(add) {
		this.medals.push(add)
	}

}

var a1;

a1 = new Athlete('Mike Williams', '6\'3\"', 18, 'United States', ['Gold', 'Gold', 'Silver'], true);

console.log(a1); // Testing, array size is 3
console.log(a1 instanceof Athlete);
a1.addMedal('Silver'); // Adding a medal
console.log(a1); // 4 medals now


// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();

function BadmintonPlayer(name, age, height, countryOfOrigin, medals, isOlympian, isMarried) {
	//JG: Pay attention to the __proto__ properties that I added.
	//JG: We didn't cover this in class, so I'm presenting it here.
	//JG: this.__proto__ is how you assign properties up the chain.
	//JG: The code is redundant, yes.
	//JG: The point is to keep the values in the parent.
	this.__proto__.name = name;
	this.__proto__.age = age;
	this.__proto__.height = height;
	this.__proto__.countryOfOrigin = countryOfOrigin;
	this.__proto__.medals = medals;
	this.__proto__.isOlympian = isOlympian;
	this.isMarried = isMarried;
	this.achievement = function() {
		return this.name + ' loves badminton!';
	};
};

BadmintonPlayer.prototype = new Athlete();
BadmintonPlayer.prototype.constructor = Athlete;

var player1 = new BadmintonPlayer('Dan Lin', 30, '5\'10\"', 'China', ['Gold'], true, true);

//JG: Very good way to test the inheritance functionality!
console.log(player1); // Array size is 1

//JG: Uncomment the debugger statement below and you will see that the code will stop at this line. 
//JG: It's a common debugging command supported by all modern browsers.
//JG: The array will be size 1 when you expand __proto__.medals

// debugger; 
console.log(player1.achievement()); // Displaying a string message
console.log(player1.introduce()); // Displaying a message using an inherited method from parent
player1.addMedal('Gold'); // Adding a medal using the inherited method
console.log(player1); // Arry size is 2
console.log(player1.hasOwnProperty('name')); //JG: Returns false
console.log(player1.hasOwnProperty('isMarried')); //JG: Returns true

// I realized that the array size is 1 and 2 prespectively on the console log. However, when i expand the objects, the array size for both logs were 2 'Gold' medals, why is that? Is the problem from my codes?

//JG: Your code is fine. 
//JG: Google Chrome is trying to be clever and show you the value of the object in real time.
//JG: In other words, your array is of size 1 at line 172. When the object is updated
//JG: Chrome's console will update the previous console.log of player1. That means both will be identical.
//JG: I found that if you use that debugger statement Chrome does remember the previous array size of 1.
//JG: Confusing, I know.
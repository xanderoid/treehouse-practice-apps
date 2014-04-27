//Javascript Objects

// var jim = { 
// 	name: "Jim", 
// 	skills: ["Javascript", "Ruby", "Dancing"],
// 	"favorite color": "green" 
// };

// console.log(jim.name);
// console.log(jim["favorite color"]);

//video 2

// var jim = { 
// 	name: "Jim", 
// 	skills: ["Javascript", "Ruby", "Dancing"],
// 	"favorite color": "green", 
// 	greet: function () {
// 		console.log('Hello, I am ' + jim.name);
// 	}
// };

// var nick = { 
// 	name: "Nick", 
// 	greet: function () {
// 		console.log('Hello, I am ' + nick.name);
// 	}
// };

// // console.log(jim.name);
// // console.log(jim["favorite color"]);

// // jim.name = "James";
// jim.greet();

//video 3

var personPrototype = {
	name: 'Anonymous',
	greet: function (name, mood) {
		name = name || "You";
		mood = mood || "good";

		console.log('Hello, ' + name + '.' +
					' I am ' + this.name +
					' and I am in a ' + mood + ' mood!');
	},

	species: 'Homo Sapien'
}
//this is the idea (pseudo code) not actually
//how it works in JS
	// jim = new personPrototype
	// jim.name = "Jim"
	// jim.greet()

function Person (name) {
	this.name = name;
	return this;
}
Person.prototype = personPrototype;

jim = new Person ("Jim")




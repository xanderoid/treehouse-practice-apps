//JavaScript Functions

function sayHello (name, greeting) {
	if (typeof greeting === 'undefined'){
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);

	return "Done";
}


sayHello('Jim');
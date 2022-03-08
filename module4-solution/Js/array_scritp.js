//Array
console.log("*** Array ***");
var courses = ["HTML", "CSS", "JS"];
 
for (var course in courses) {
	console.log("Our courses: "+courses[course]);
}

//Object 
console.log("*** Object ***");
var info = {
	name: "Fatima", 
	course: "HTML/CSS/JS",
	platform: "coursera"
}

for (var prop in info) {
	console.log(prop + ": " + info[prop]);
}

//Lecture 51: Closures 
console.log("*** Closures ***");
function makeMultiplier (multiplier) {
	//multiplier = 2
			console.log("multiplier contain the value = " + multiplier);
	return (
		function (x) {
			//x = 3
			console.log("X contain the value = " + x);
			return multiplier * x;
		}

		);
}
var doubleAll = makeMultiplier(2);

console.log(doubleAll(3));

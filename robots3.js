function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "OjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function() {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function() {
    this.errorMessage = "I appear to have a short circuit!"
};

var robby = new Robot("Robby", 1956, "Dr. Morbius"); 
var rosie = new Robot("Rosie", 1962, "George Jetson");


console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));  // returns TRUE
console.log(rosie.hasOwnProperty("errorMessage")); // returns FALSE

//console.log(rosie)
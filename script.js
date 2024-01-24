function Car(make, model) {
	this._make = make;
	this._model = model;
	}
     Car.prototype.getMakeModel = function(){
		return this._make + " " + this._model; 
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model)
	this._topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
return this._topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
var myCar = new Car('Toyota', 'Camry');
console.log(myCar.getMakeModel()); // Output: Toyota Camry

var mySportsCar = new SportsCar('Ferrari', '488 GTB', 205);
console.log(mySportsCar.getMakeModel()); // Output: Ferrari 488 GTB
console.log(mySportsCar.getTopSpeed()); // Output: 205
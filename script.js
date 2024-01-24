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
const car = new Car('Toyota', 143);
console.log(car);
const sportCar = new SportsCar('BMD', 1437, '80km/h');
console.log(sportCar);
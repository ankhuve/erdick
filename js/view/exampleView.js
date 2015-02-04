 //ExampleView Object constructor
var ExampleView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.totalCost = container.find("#totalCost")
	// this.plusButton.addEventListener('click', setNumberOfGuests(1));
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.totalCost.html(model.totalPrice);
}
 //ExampleView Object constructor
var ExampleView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");

	this.fullMenu = container.find("#fullMenu");
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	this.fullMenu.html(model.getFullMenu());

	this.totalCost = container.find("#totalCost");
	this.totalCost.html(model.getTotalMenuPrice());

	// this.plusButton.addEventListener('click', setNumberOfGuests(1));
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	

	
}
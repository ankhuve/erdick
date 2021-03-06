 //ExampleView Object constructor
var ExampleView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.fullMenu = container.find("#fullMenu");

	model.addObserver(this);
	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalCost.html(model.getTotalMenuPrice());
	}
	// model.addDishToMenu(3);
	// model.addDishToMenu(100);
	// model.addDishToMenu(200);
	var menuObject = model.getFullMenu();
	var menuSummary = "";
	for(dish in menuObject){
		menuSummary += "<div class='row'>";
		menuSummary += "<div class='col-md-9'>"+menuObject[dish].name+"</div>";
		menuSummary += "<div class='col-md-2'>"+model.getPriceOfDish(menuObject[dish])+"</div>";
		menuSummary += "</div>";
	}

	this.fullMenu.html(menuSummary);

	this.totalCost = container.find("#totalCost");
	this.totalCost.html(model.getTotalMenuPrice());

	// this.plusButton = container.find("#plusGuest");
	// this.plusButton.addEventListener('click', model.setNumberOfGuests(1));
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	

	
}
 //dishIngredientView Object constructor
var DinnerOverviewView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	var fullMenu = model.getFullMenu();
	// var returnstring = "";
	var returnstring = "";
	for(dish in fullMenu){
		this.dishImage = container.find("#imageDish"+dish);
		this.dishImage.html("<img src='images/"+fullMenu[dish].image+"'>");

		this.dishName = container.find("#dishName"+dish);
		this.dishName.html(fullMenu[dish].name);

		this.dishCost = container.find("#dishCost"+dish);
		this.dishCost.html(model.getPriceOfDish(fullMenu[dish]));
	}

	this.totalCost = container.find("#totalCost");
	this.totalCost.html(model.getTotalMenuPrice());
	// this.appetizerImage = container.find("#"+imageDishNumber);
	// this.appetizerImage.html(returnstring);

	

}
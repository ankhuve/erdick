 //dishIngredientView Object constructor
var DishIngredientView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
 	var dishID = 1;
	this.menuDetails = container.find("#dishOverview");
	this.menuDetails.html(model.getDishOverview(dishID));

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
}
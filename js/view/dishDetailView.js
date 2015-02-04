 //DishDetailView Object constructor
var DishDetailView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishName = container.find("#nameOfDish");
	this.dishName.html(model.getDish(1).name);

	
}
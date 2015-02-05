 //DishDetailView Object constructor
var DishDetailView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.dishName = container.find("#nameOfDish");
	this.dishName.html(model.getDish(1).name);
	this.menuDetails = container.find("#dishOverview");
	this.menuDetails.html(model.getDishOverview(1));

	this.dishPic = container.find("#dishImg");
	this.dishPic.html("<img src='images/"+model.getDish(1).image+"' width='300px' height='300px'>");

	this.dishDescription = container.find("#dishDesc");
	this.dishDescription.html(model.getDish(1).description);

}
 //dishIngredientView Object constructor
var DishIngredientView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
 	var dishID = 3;
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
 	
	this.menuDetails = container.find("#dishOverview");

	var selectedDish = model.getDish(dishID);
	// var allIngredients = [];
	var returnstring = "";
	var totalPrice = 0;
	for(ingredient in selectedDish.ingredients){
		returnstring += "<div class='row'>";
		returnstring += "<div class='col-md-3'>"+selectedDish.ingredients[ingredient].quantity*model.getNumberOfGuests()+" "+selectedDish.ingredients[ingredient].unit+"</div>";
		returnstring += "<div class='col-md-6'>"+selectedDish.ingredients[ingredient].name+"</div>";
		returnstring += "<div class='col-md-1'> SEK </div>";
		returnstring += "<div class='col-md-1'>"+selectedDish.ingredients[ingredient].price*model.getNumberOfGuests()+"</div>";
		returnstring += "</div>";
		totalPrice += selectedDish.ingredients[ingredient].price * model.getNumberOfGuests();
	}
	returnstring += "<hr id='priceDivider'>";
	returnstring += "<div class='row'>";
	returnstring += "<div class='col-md-4'>";
	returnstring += "<center><button class='btn btn-warning'>Confirm dish</button></center>";
	returnstring += "</div>";
	returnstring += "<div class='col-md-offset-5 col-md-1'> SEK </div>";
	returnstring += "<div class='col-md-1'>"+totalPrice+"</div>";

	returnstring += "</div>";

	
	this.menuDetails.html(returnstring);


}
 //dishIngredientView Object constructor
var DishIngredientView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
 	var dishID = 3;
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
	
	this.menuDetails.html(returnstring);


	// var overview = model.getDishOverview(dishID);

	
	// var totalPriceRow = "";
	// totalPriceRow += "<hr style='border-color:black;width:95%;'>";
	// totalPriceRow += "<div class='row' style='margin-top:20px;'>";
	// totalPriceRow += "<div class='col-md-4'><div id='confirmDishButton'><button id='confirmDish' class='btn btn-warning'>Confirm Dish</button></div></div>";
	// totalPriceRow += "<div class='col-md-1 col-md-offset-5'>SEK</div>";
	// totalPriceRow += "<div class='col-md-1'>"+overview[1]+"</div>";
	// totalPriceRow += "</div>";
	// this.menuDetails.html(overview[0] + totalPriceRow);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
}
var DinnerPreparationView = function (container, model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	var fullMenu = model.getFullMenu();

	this.preparations = container.find("#preparations");

	var returnstring = "";
	for(dish in fullMenu){
		returnstring += "<div class='row'>";
		returnstring += "<div class='col-md-2'><img src='images/"+fullMenu[dish].image+"'></div>";

		returnstring += "<div class='col-md-4'>";
		returnstring += "<h3><strong>"+fullMenu[dish].name+"</strong></h3>";
		for(ingredient in fullMenu[dish].ingredients){
			returnstring += fullMenu[dish].ingredients[ingredient].name + "<br/>";
		}
		returnstring += "</div>";

		returnstring += "<div class='col-md-5'>";
		returnstring += "<h4><strong> Preparation </strong></h4>";
		returnstring += fullMenu[dish].description;
		returnstring += "</div>";

		returnstring += "</div>";
	}

	this.preparations.html(returnstring);

}
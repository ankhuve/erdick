var ExampleViewController = function(view, model ) {
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		// model.notifyObservers(event);
		alert("Current number of guests: "+ model.getNumberOfGuests());
		// alert("button was pressed" +event);
	});
	
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	
}
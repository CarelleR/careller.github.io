// JavaScript Document

function validate(book_order) {
	
	return validateFirstName() 
		&& validateLastName();

	// Check if a field is empty
	function check_empty(field, error) {
		if (field === "") {
			alert(error);
			return false;
		}
	}
	
	// Check if a field contains letters, hyphens, apostrophes and spaces only
	function check_letters(field, error) {
		var letters = /^[-a-zA-Z'\s]*$/;
		if (field.match(letters)) {
			return true;
		} else {
			alert(error);
			return false;
		}
	}
	
	function validateFirstName() {
			return check_empty(document.book_order.first_name.value, "You must enter your first name") &&
					check_letters(document.book_order.first_name.value, "You can only enter letters, hyphens, apostrophes and spaces for your first name")
	}
	


	// ----------------------------------------------------------------------------

	// Book selection - check at least 1 is selected
	var i;
	var checked = false;
	for (i = 0; i < document.book_order.book_name.length; i++) {
		if (document.book_order.book_name[i].selected) {
			checked = true;
		}
	}
	if (!checked) {
		alert("You must select at least 1 book to order");
		return false;
	}

	// First name


	// Last name
	check_empty(document.book_order.last_name.value, "You must enter your last name");
	check_letters(document.book_order.last_name.value, "You can only enter letters, hyphens, apostrophes and spaces for your last name");

	// Telephone
	check_empty(document.book_order.telephone.value, "You must enter your telephone number");

	var telephone_number = /^(?=.*[0-9])[- +()0-9]+$/;
	if (!document.book_order.telephone.value.match(telephone_number)) {
		alert("You can only enter numbers, hyphens, brackets, spaces and + for your telephone");
		return false;
	}

	// Email
	check_empty(document.book_order.email.value, "You must enter your email");

	var email_address = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!document.book_order.email.value.match(email_address)) {
		alert("You must enter a valid email format, e.g. example@booksrus.com");
		return false;
	}

	// Address
	check_empty(document.book_order.address.value, "You must enter your address");

	// City
	check_empty(document.book_order.city.value, "You must enter your city");
	check_letters(document.book_order.city.value, "You can only enter letters, hyphens, apostrophes and spaces for your city");

	// State
	checked = false;
	for (i = 1; i < document.book_order.state.length; i++) {
		if (document.book_order.state[i].selected) {
			checked = true;
		}
	}
	if (!checked) {
		alert("You must specify your state");
		return false;
	}


	// Postcode
	check_empty(document.book_order.postcode.value, "You must enter your postcode");

	var postcode_digits = /^[0-9]{4}$/;
	if (!document.book_order.postcode.value.match(postcode_digits)) {
		alert("You must enter a valid postcode with 4 digits");
		return false;
	}

	// Card number
	check_empty(document.book_order.card_number.value, "You must enter your card number");

	var card_numbers = /^[0-9]{12,19}$/;
	if (!document.book_order.card_number.value.match(card_numbers)) {
		alert("Your credit card must be between 12-19 numbers and not include spaces or hyphens, e.g. 4012888888881881");
		return false;
	}

	// Name on card
	check_empty(document.book_order.card_name.value, "You must enter your the name on your card");
	check_letters(document.book_order.card_name.value, "You can only enter letters, hyphens, apostrophes and spaces for the name on your card");


	// Expiry date
	checked = false;
	for (i = 1; i < document.book_order.month.length; i++) {
		if (document.book_order.month[i].selected) {
			checked = true;
		}
	}
	if (!checked) {
		alert("You must specify credit card expiry month");
		return false;
	}

	checked = false;
	for (i = 1; i < document.book_order.year.length; i++) {
		if (document.book_order.year[i].selected) {
			checked = true;
		}
	}
	if (!checked) {
		alert("You must specify credit card expiry year");
		return false;
	}

	// CVV
	check_empty(document.book_order.CVV.value, "You must enter your CVV");

	var CVV_numbers = /^[0-9]{3,4}$/;
	if (!document.book_order.CVV.value.match(CVV_numbers)) {
		alert("Your CVV must be between 3-4 numbers and not include spaces or hyphens, e.g. 313");
		return false;
	}
}

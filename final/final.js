// Form validation

var form = document.querySelector('form');

form.addEventListener('submit', function(e) {

	var errors, errorDiv, namePattern, namePattern2, agePattern, emailPattern, urlPattern, phonePattern, phonePattern2;

	errors = [];
	errorDiv = document.getElementById('error');

	// Regular expression patterns
	// I cheated, no way I could come up with some of these, had to google
	// When I was testing first and last name, I keep getting error when using the same namePattern variable. It went away when I created a second identical variable. Samething to home and mobile phone number. Hence the double declaration of namePattern and phonePattern. Why do I have to do that?
	namePattern = /^[a-z'-]+$/igm;
	namePattern2 = /^[a-z'-]+$/igm;
	agePattern = /^[0-9]+$/igm;
	emailPattern = /[a-z0-9_\-.]+@[a-z0-9]+\.[a-z]{2,}(.[a-z]{2,})?/igm;
	urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/igm;
	phonePattern = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/igm;
	phonePattern2 = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/igm;

	// Make sure first and last name is entered, valid and not greater than 50 characters
	if (this.first_name.value === '') {
		errors.push('First name is required');
	} else {
		if (namePattern.test(this.first_name.value) === false) {
			errors.push('First name is invalid');
		} else if (this.first_name.value.length > 50) {
			errors.push('First name can not be greater than 50 characters long');
		}
	}

	if (this.last_name.value === '') {
		errors.push('Last name is required');
	} else {
		if (namePattern2.test(this.last_name.value) === false) {
			errors.push('Last name is invalid');
		} else if (this.last_name.value.length > 50) {
			errors.push('Last name can not be greater than 50 characters long');
		}
	}

	// Make sure age is a number between 18 to 100 if entered
	if (this.age.value !== '') {
		if (agePattern.test(this.age.value) === true) {
			if (this.age.value < 18) {
				errors.push('You must be over 18 years old to join this conference');
			} else if (this.age.value > 100) {
				errors.push('I am sorry but you better stay home');
			}
		} else {
			errors.push('Something wrong with your age?');
		}
	}

	// Make sure e-mail is entered and valid
	if (this.email.value === '') {
		errors.push('Email address is required');
	} else {
		if (emailPattern.test(this.email.value) === false) {
			errors.push('Invalid e-mail address');
		}
	}

	// Make sure experience level is selected
	if (document.getElementById('level').selectedIndex === 0) {
		errors.push('Please select an experience level');
	}

	// I think this does the job too?
	/*var temp = document.getElementById('level')

	if (temp.options[temp.selectedIndex].value === '') {
		errors.push('Please select an experience level');
	}*/

	// Make sure bio is entered
	var bio = document.getElementById('bio');
	//var wordCount= bio.value.split(' ').length;

	if (bio.value === '') {
		errors.push('Bio info is required');
	} else {
		if (bio.value.length > 140) {
			errors.push('Biography cannot be longer than 140 characters');
		}
		/*else if (wordCount < 3) {
			error.push('Biography should be at least 3 words in length');
		}	*/
		// Couldn't get the word count to work
	}

	// Make sure personal website is valid
	if (this.website.value !== '') {
		if (urlPattern.test(this.website.value) === false) {
			errors.push('Invalid url entered');
		}
	}

	// Make sure both home phone and mobile phone numbers are valid
	if (this.homePhone.value !== '') {
		if (phonePattern.test(this.homePhone.value) === false) {
			errors.push('Invalid home phone number entered');
		}
	}

	if (this.mobilePhone.value !== '') {
		if (phonePattern2.test(this.mobilePhone.value) === false) {
			errors.push('Invalid mobile phone number entered');
		}
	}

	// Make sure meal preference is selected
	if (document.querySelectorAll('[name=meal]:checked').length === 0) {
		errors.push('Please select your meal preference');
	}

	// Make sure skills is selected
	if (document.querySelectorAll('[name=skills]:checked').length === 0) {
		errors.push('Please select at least one skill set');
	}

	// Datepicker
	$(function() {
		$('#doa').datepicker();
	});

	//If any inputs failed prevent form submit
	if (errors.length > 0) {
		//prevent form submit
		e.preventDefault();

		//unhide
		errorDiv.className = '';

		//clear out previous errors
		errorDiv.innerHTML = errors.join('<br>');
	}
}, false);
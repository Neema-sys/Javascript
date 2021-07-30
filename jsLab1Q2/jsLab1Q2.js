function validateForm(e){
	e.preventDefault();
    // regular expressions
    var regName = /^[A-Za-z]+$/;
    var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 	var regPassword =  /^[A-Za-z]\w{6,14}$/;
	var regPhone = /^\d{10}$/;
    //input from the user
    var name = document.getElementById('name').value.trim();
    var e_mail = document.getElementById('email').value.toLowerCase().trim();
	var pass = document.getElementById('password').value.trim();
	var confirm_pass = document.getElementById('confirm-password').value.trim();
	var phone = document.getElementById('phone').value.trim();

	if(!regName.test(name)){
    document.getElementById('nameErr').innerHTML = 'Please enter a valid first and last name.';
    document.getElementById('name').focus();
    }

     if(!regEmail.test(e_mail)){
        document.getElementById('emailErr').innerHTML = 'Please enter a valid email address.';
        document.getElementById('email').focus();
    }

    if (!regPassword.test(pass)){
        document.getElementById('passErr').innerHTML = 'Please enter a valid Password';
        document.getElementById('password').focus();
    }

   
	if (pass !== confirm_pass){
	    document.getElementById('confirmPassErr').innerHTML = 'Please recheck your confirmed password';
	    document.getElementById('password').focus();   
    }


	if (!regPhone.test(phone)){
        document.getElementById('phoneErr').innerHTML = 'Please enter the number in +XX XXXXX XXXXX format';
        document.getElementById('phone').focus();
    }
}
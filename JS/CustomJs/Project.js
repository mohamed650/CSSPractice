$(document).ready(function(){
	$("#do-login").click(function(){
		var value = validaterequirements();
		if(value != true){
			window.location.href = "ProjectLogin.html";
		}else{
			window.location.href = "ProjectRegister.html";
		}
	});
	function validaterequirements(){
		var username = $("#username").val();
		var password = $("#password").val();
		if(username == "" && password == ""){
			alert("Username and Password should not be empty!!!");
			return false;
		}else if(username == ""){
			alert("Username should not be empty!!!");
			return false;
		}else if(password == ""){
			alert("Password should not be empty!!!");
			return false;
		}else if(username !== "admin"){
			alert("Entered Username is Wrong!!!");
			return false;
		}else if(password !== "admin"){
			alert("Entered Password is Wrong!!!");
			return false;
		}else{
			alert("Logged In Successfully...");
			return true;
		}
	}
	
	$("#submitbtn").click(function(){
		var value = validateUser();
		if(value != true){
			window.location.href = "ProjectRegister.html";
		}else{
			window.location.href = "DisplayUserDetails.html";
		}
	});
	function validateUser(){
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var birthDate = $("#birthDate").val();
		var gender = $('input[name="inlineRadioOptions"]:checked').val();
		var selectplaces = $("#selectplaces").val();
		var emailAddress = $("#emailAddress").val();
		var phoneNumber = $("#phoneNumber").val();
		localStorage.setItem("FirstName", firstName);
		localStorage.setItem("LastName", lastName);
		localStorage.setItem("BirthDate", birthDate);
		localStorage.setItem("Email", emailAddress);
		localStorage.setItem("Phone", phoneNumber);
		localStorage.setItem("Gender", gender);
		const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var today = new Date();
		birthDate = new Date(birthDate);
		var age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
		if(firstName == ""){
			alert("First Name should not be Empty!!!");
			return false;
		}else if(lastName == ""){
			alert("Last Name should not be Empty!!!");
			return false;
		}else if(birthDate == ""){
			alert("Please Enter the Date of Birth!!!")
			return false;
		}else if(age < 18){
			alert("You are not Eligible, you are under aged!!! Age Must be 18 years above...");
			return false;
		}else if(selectplaces == ""){
			alert("Please Select Your City!!!");
			return false;
		}else if(!regex_pattern.test(emailAddress)){
			alert("You have Entered Invalid Email Address!!!");
			return false;
		}else if(phoneNumber.length != 10){
			alert("Please enter the correct phone number!!!");
			return false;
		}else{
			alert("Registered Successfully....");
			return true;
		}
	}
});

function getData(){
	var firstname = localStorage.getItem("FirstName");
	var lastname = localStorage.getItem("LastName");
	var birthday = localStorage.getItem("BirthDate");
	var email = localStorage.getItem("Email");
	var phonenumber = localStorage.getItem("Phone");
	var gender = localStorage.getItem("Gender");
	document.getElementById("firstname").innerHTML = firstname;
	document.getElementById("lastname").innerHTML = lastname;
	document.getElementById("birthday").innerHTML = birthday;
	document.getElementById("email").innerHTML = email;
	document.getElementById("phonenumber").innerHTML = phonenumber;
	document.getElementById("gender").innerHTML = gender;
	
	
}

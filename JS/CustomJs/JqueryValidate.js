$(document).ready(function(){
	$("#form").validate({
			rules: {
			firstName: 'required',
			lastName : 'required',
			birthDate: 'required',
			inlineRadioOptions: 'required',
			emailAddress: {
				required: true,
				email: true,
			},
			phoneNumber: {
				required: true,
				minlength: 10,
				maxlength: 10
			},
		},
		messages: {
			firstName: 'Please Enter the First Name',
			lastName: 'Please Enter the Last Name',
			birthDate: 'Please Enter the Date of Birth',
			inlineRadioOptions: 'Please Select the Gender',
			emailAddress: 'Plese Enter the Email',
			phoneNumber: 'Please Enter Valid Phone Number'
		},
		submitHandler: function(form) {
			alert("Valid form");
			return false;
			//window.location.href = "ProjectLogin.html";
		}
		});
	$("#submitbtn").click(function(){
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var birthDate = $("#birthDate").val();
		var gender = $('input[name="inlineRadioOptions"]:checked').val();
		var emailAddress = $("#emailAddress").val();
		var phoneNumber = $("#phoneNumber").val();
		var newline = "\r\n";
		var message = firstName;
		message += newline;
		message += lastName;
		message += newline;
		message += birthDate;
		message += newline;
		message += gender;
		message += newline;
		message += emailAddress;
		message += newline;
		message += phoneNumber;
		alert(message);
		$("#firstname").html(firstName);
		$("#lastname").html(lastName);
		$("#email").html(emailAddress);
		$("#phonenumber").html(phoneNumber);
		$("#birthday").html(birthDate);
		$("#gender").html(gender);
		
		var tabledata = [
{id:1, name: firstName, lastname: lastName, Email: emailAddress, Phone: phoneNumber, DOB: birthDate, Gender: gender}
]

var table = new Tabulator("#example-table", {
    data: tabledata,
	autoColumns:true
});
	});
		
});
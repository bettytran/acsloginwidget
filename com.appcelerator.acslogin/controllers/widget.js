var Cloud = require('ti.cloud');
var animation = require('alloy/animation');

var settings = {
	loginCallback: null,
 	createCallback: null
}

function loginClick(e) {
	Cloud.Users.login({
		login : $.usernameTxt.value,
		password : $.passwordTxt.value
	}, function(e) {
		if(e.success == 1){
			settings.loginCallback();
		} else {
			$.msgLbl.text = e.message;
		}
		
	});
}




function forgotClick(e) {
	resetLoginForm();
	animation.fadeOut($.acsLogin, 200);
	animation.fadeIn($.acsloginPass, 500);
}

function remindClick(e) {
	Cloud.Users.requestResetPassword({
		email : $.emailTxt.value
	}, function(e) {
		if(e.success == 1){
			$.emailLbl.text = 'Password reminder sent';
			animation.fadeOut($.acsloginPass, 200);
			animation.fadeIn($.acsLogin, 500);
		} else {
			$.emailLbl.text = 'Error: ' + e.message;
		}
		
	});
}



function loginlinkClick(e) {
	animation.fadeOut($.acsloginAccount, 200);
	animation.fadeOut($.acsloginPass, 200);
	animation.fadeIn($.acsLogin, 500);
	$.emailLbl.text = '';
	resetAccountForm();
	resetEmailForm();
}

function createAccountClick(e){
	resetLoginForm();
	animation.fadeOut($.acsLogin, 200);
	animation.fadeIn($.acsloginAccount, 500);
	
	
	//Todo: Customise account creation fields.
	// var textfield = Alloy.createWidget('com.appcelerator.acslogin', 'textfield').getView('acsLoginAccountTxt');
	 //$.acsloginAccount.add(textfield);
	
}

function createClick(e){
	Cloud.Users.create({
		username: $.usernameNew.value,
		password: $.passwordNew.value,
		password_confirmation: $.passwordConfirm.value
	}, function(e){
		if(e.success == 1){
			$.accountLbl.text = "Account Created!";
		} else {
			$.accountLbl.text = 'Error: ' + e.message;
		}
	});
}


function resetEmailForm(){
	$.emailLbl.text = '';
	$.emailTxt.value = '';
}

function resetAccountForm(){
	$.accountLbl.text = '';
	$.usernameNew.value = '';
	$.passwordNew.value = '';
	$.passwordConfirm.value = '';
}

function resetLoginForm(){
	$.msgLbl.text = '';
	$.usernameTxt.value = '';
	$.passwordTxt.value = '';
}

exports.init = function(params) {
	settings.loginCallback = params.loginCallback;
}

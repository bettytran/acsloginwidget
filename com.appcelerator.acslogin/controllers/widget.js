var Cloud = require('ti.cloud');
var animation = require('alloy/animation');

var settings = {};

$.init = function(args) {
	settings.callback = args.callback;
};

//Performs ACS login
var login = function() {
	Cloud.Users.login({
		login : $.loginUser.value,
		password : $.loginPass.value
	}, function(evt) {
		if (evt.success) {
			settings.callback();
		} else {
			$.message.text = evt.message;
		}
	});
};

//Sends out the password reset email
var remind = function() {
	Cloud.Users.requestResetPassword({
		email : $.remindEmail.value
	}, function(evt) {
		if (evt.success) {
			$.message.text = 'Password reminder sent';
			showLogin();
		} else {
			$.message.text = 'Error: ' + evt.message;
		}

	});
};

//Create a new account
var create = function() {
	Cloud.Users.create({
		username : $.createUser.value,
		email : $.createEmail.value,
		password : $.createPass.value,
		password_confirmation : $.createConfirm.value
	}, function(evt) {
		if (evt.success) {
			$.message.text = "Account created!";
		} else {
			$.message.text = 'Error: ' + evt.message;
		}
	});
};

var showLogin = function() {
	animation.fadeOut($.remindView, 200);
	animation.fadeOut($.createView, 200);
	animation.fadeIn($.loginView, 500);
	
	reset();
};

var showCreate = function() {
	animation.fadeOut($.loginView, 200);
	animation.fadeIn($.createView, 500);
	
	reset();
};

var showRemind = function() {
	animation.fadeOut($.loginView, 200);
	animation.fadeIn($.remindView, 500);
	
	reset();
};

var reset = function() {
	$.message.text = '';
	$.loginUser.value = '';
	$.loginPass.value = '';
	$.remindEmail.value = '';
	$.createUser.value = '';
	$.createEmail.value = '';
	$.createPass.value = '';
	$.createConfirm.value = '';
};



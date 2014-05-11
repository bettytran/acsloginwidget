Titanium Alloy ACS Login Widget
================
##Overview

A login widget for Titanium Alloy that integrates with Appcelerator Cloud Services.

##Manifest
- version: 1.0 (beta)
- github: https://github.com/bettytran/acsloginwidget
- author: Betty Tran
- platforms: iOS, Android

##Features

- ACS Login
- Forgotten password retrieval 
- New account creation

##Usage

- Include the widget in your application config.json file as a dependency:

```
"dependencies": {
	"com.appcelerator.acslogin": "1.1"
}
```

- Place the widget folder inside `app/widgets`. Create the `app/widgets` folder if it does not already exist.


###Initialise the widget

__views/index.xml__

```
<Require type="widget" src="com.appcelerator.acslogin" id="acslogin"/>
```

__controller/index.js__

```
$.acslogin.init({callback: function(e){//login success callback}});
```




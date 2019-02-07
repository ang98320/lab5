var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var info = request.query.description;
	var newFriend = {"name": name, "info": info, "image": "http://lorempixel.com/400/400/people"};
	/*
	response.render('index', {
		"newFriend":[
		{	"name": name,
			"info": info,
			"image": "http://lorempixel.com/400/400/people"}]
	}); */
	//console.log(newFriend);
	//console.log(data);
	data.friends.push(newFriend);
	//console.log(data);
	response.render('index', data);
	//
 };
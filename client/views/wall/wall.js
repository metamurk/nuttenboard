Template.wall.helpers({
  Categories:function() {
    return [ 
		{ "_id" : "LbxvvRLi3sxGi8uxd", "name" : "Tech" },
		{ "_id" : "gsMBngJnmrJaNrkce", "name" : "Design" },
		{ "_id" : "DddTJYWDWMD9pF83x", "name" : "Business" },
		{ "_id" : "5H5AtrDogzgRFgbxd", "name" : "Science" },
		{ "_id" : "xCYzgJivXg3e6aDAr", "name" : "Scifi" },
		{ "_id" : "KECiZeNcSLoC4jK5g", "name" : "Psychology" }
		]
  }
});

Template.wall.auctions = Template.wall.auctionlist = function(){
	
	var url = 'http://youporn.yourporno.biz/files/2012/09/Das-scheint-Porno-G%C3%B6ttin-zu-sein-bei-den-MEGA-Titten.jpg';
	
	return [
	{
		id : "1",
		title: "Geile Fotze",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "2",
		title: "Minipenis",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "3",
		title: "Wurzelpeter",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "1",
		title: "Geile Fotze",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "2",
		title: "Minipenis",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "3",
		title: "Wurzelpeter",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	},
	{
		id : "4",
		title: "Saufende Wurst",
		adress: "72001 Siebringen",
		url: url
	}
	]
};

function masonize(callback) {
  var container = $('#mainContent');
  container.masonry({
    itemSelector: '.item',
    gutter:10
  })
  if(callback){callback()};
};

Template.wall.rendered = function() {
  setTimeout(function(){
    masonize(function(){
    })
  }, 3500);
};
Template.wall.helpers({
  Categories:function() {
    return Categories.find();
  }
});

Template.wall.auctions = Template.wall.auctionlist = function(){
	return Auctions.find();;
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


/*{
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
	}*/
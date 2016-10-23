Auctions = new Meteor.Collection( 'auctions', {
	transform: function(f) {
         f.url = 'http://youporn.yourporno.biz/files/2012/09/Das-scheint-Porno-G%C3%B6ttin-zu-sein-bei-den-MEGA-Titten.jpg';
         return f;
		}
} );

//data scheme
var AuctionsSchema = new SimpleSchema({
  "title": {
    type: String,
    label: "Title of the auction"
  },
  "subtitle": {
    type: String,
    label: "Subtitle of the auction"
  },
  "description": {
	  type: String,
	  label: "Description of the auction"
  },
  "endDate": {
	  type: Date,
	  label: "Date at which the auction should end",
  },
  "creationDate": {
	  type: Date,
	  label: "Date at which the auction was created",
	  autoValue: function(){
		return new Date();
		},
  },
  //field for testing some things :)
  testdata: {
	  type: String,
	  label: "testfield",
	  autoValue: function(){
		return "autoValue";
		},
	  autoform: {
		  rows: 10
		}
  }
});
Auctions.attachSchema( AuctionsSchema );

//publish suscribe
if(Meteor.isServer){
    Meteor.publish('auctions', function () {
        return Auctions.find();
    });
	Meteor.publish('auction', function (id) {
        return Auctions.findOne({ _id: id});
    });
}
else{
    Meteor.subscribe('auctions');
}




Auctions = new Meteor.Collection( 'auctions', {
	transform: function(f) {
         f.url = 'http://imalbum.aufeminin.com/album/D20051217/152757_FQHS7Y2G8AFWJHTRRNXTT7CSP6LGOW_katze_H163854_L.jpg';
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
		}
  },
  user: {
	  type: String,
	  label: "User, who created the auction",
	  autoValue: function(){
		  return Meteor.userId();
	  }
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




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
  }
});
Auctions.attachSchema( AuctionsSchema );

//publish suscribe
if(Meteor.isServer){
    Meteor.publish('auctions', function () {
        return Auctions.find();
    });
}
else{
    Meteor.subscribe('auctions');
}




Auctions = new Meteor.Collection( 'auctions' );

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




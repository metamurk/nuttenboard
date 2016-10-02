Categories = new Meteor.Collection( 'categories' );

//data scheme
var CategoriesSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "name of the category"
  }
});
Categories.attachSchema( CategoriesSchema );

//publish suscribe
if(Meteor.isServer){
    Meteor.publish('categories', function () {
        return Categories.find();
    });
}
else{
    Meteor.subscribe('categories');
}




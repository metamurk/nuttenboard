
/*
* Startup
* Functions to run on server startup. Note: this file is for calling functions
* only. Define functions in /server/admin/startup-functions.
*/

Meteor.startup(function() {
  if(Books.find().count() === 0) {
    // Books
  }
  if(Categories.find().count() === 0) {
    // Categories
    Categories.insert({name:'Tech'});
    Categories.insert({name:'Design'});
    Categories.insert({name:'Business'});
    Categories.insert({name:'Science'});
    Categories.insert({name:'Scifi'});
    Categories.insert({name:'Psychology'});
  }
});
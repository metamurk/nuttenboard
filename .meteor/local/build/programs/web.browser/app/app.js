var require = meteorInstall({"client":{"views":{"wall":{"template.wall.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// client/views/wall/template.wall.js                                           //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
                                                                                // 1
Template.__checkName("wall");                                                   // 2
Template["wall"] = new Template("Template.wall", (function() {                  // 3
  var view = this;                                                              // 4
  return HTML.Raw('<div class="container-fluid">\n    <div class="row-fluid">\n      <div class="text-center">\n             lala\n      </div>\n    </div>  \n  </div>');
}));                                                                            // 6
                                                                                // 7
//////////////////////////////////////////////////////////////////////////////////

},"wall.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// client/views/wall/wall.js                                                    //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
                                                                                //
//////////////////////////////////////////////////////////////////////////////////

}}},"header":{"template.header.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// client/header/template.header.js                                             //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
                                                                                // 1
Template.__checkName("header");                                                 // 2
Template["header"] = new Template("Template.header", (function() {              // 3
  var view = this;                                                              // 4
  return HTML.Raw('<nav class="navbar navbar-default" role="navigation">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      \n    </div>\n    <a class="navbar-brand" href="/">Nuttenboard</a>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse" id="navbar-collapse-1">\n     \n      <ul class="nav navbar-nav navbar-left">\n                   <form class="navbar-form" role="search">\n                <div class="input-group">\n                    <input type="text" class="form-control" placeholder="Search" name="q">\n           \n                </div>\n         <form class="navbar-form pull-left">\n                     <select name="" id="" class="form-control" style="width: 80px;">\n                    <option value="D">D</option>\n                    <option value="CH">CH</option>\n                    <option value="A">A</option>\n                    </select>\n\n                    <select name="" id="" class="form-control" style="width: 180px;">\n                    <option value="muc">München</option>\n                    <option value="ffm">Frankfurt</option>\n                    </select>\n\n                <button type="submit" class="btn btn-default">Search</button>\n               </form>\n           </form>\n      </ul>\n \n    </div><!-- /.navbar-collapse -->\n</nav>');
}));                                                                            // 6
                                                                                // 7
//////////////////////////////////////////////////////////////////////////////////

},"header.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// client/header/header.js                                                      //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
                                                                                //
Template.header.events({                                                        // 2
    'click .logout': function () {                                              // 3
        function clickLogout(event) {                                           // 3
            event.preventDefault();                                             // 4
            Meteor.logout();                                                    // 5
            console.log(Categories.find().count());                             // 6
            Router.go("home");                                                  // 7
        }                                                                       // 8
                                                                                //
        return clickLogout;                                                     // 3
    }()                                                                         // 3
});                                                                             // 2
                                                                                //
Template.header.helpers({                                                       // 11
    categories: function () {                                                   // 12
        function categories() {                                                 // 12
            Categories.find().map(function (doc) {                              // 13
                console.log(doc.name);                                          // 14
                return doc.name;                                                // 15
            });                                                                 // 16
        }                                                                       // 17
                                                                                //
        return categories;                                                      // 12
    }()                                                                         // 12
});                                                                             // 11
//////////////////////////////////////////////////////////////////////////////////

}},"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// client/template.main.js                                                      //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
                                                                                // 1
Template.body.addContent((function() {                                          // 2
  var view = this;                                                              // 3
  return [ Spacebars.include(view.lookupTemplate("header")), "\n  ", HTML.DIV({
    id: "main",                                                                 // 5
    "class": "container-fluid"                                                  // 6
  }, "\n      ", HTML.DIV({                                                     // 7
    "class": "row-fluid"                                                        // 8
  }, " \n         ", Blaze.View("lookup:renderPage", function() {               // 9
    return Spacebars.mustache(view.lookup("renderPage"));                       // 10
  }), "\n      "), "\n  ") ];                                                   // 11
}));                                                                            // 12
Meteor.startup(Template.body.renderToDocument);                                 // 13
                                                                                // 14
//////////////////////////////////////////////////////////////////////////////////

},"routes":{"routes-public.js":function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// client/routes/routes-public.js                                               //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
Router.route('/', function () {                                                 // 1
  this.render('Wall');                                                          // 2
});                                                                             // 3
//////////////////////////////////////////////////////////////////////////////////

}}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/views/wall/template.wall.js");
require("./client/header/template.header.js");
require("./client/template.main.js");
require("./client/views/wall/wall.js");
require("./client/header/header.js");
require("./client/routes/routes-public.js");
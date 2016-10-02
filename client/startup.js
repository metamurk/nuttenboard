getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "de";
};


if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);



    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
               console.log("language set");
        Session.set("showLoadingIndicator", false);
      })
      .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
  });
}

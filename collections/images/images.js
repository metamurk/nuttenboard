UserImages = new FilesCollection({
  collectionName: 'UserImages',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('files.userimages.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.userimages.all', function () {
    return UserImages.find().cursor;
  });
}

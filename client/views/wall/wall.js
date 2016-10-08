Template.wall.helpers({
  Categories:function() {
    return Categories.find();
  }
});

Template.wall.helpers({
	auctionlist:function() {
		return Auctions.find();
	}
});

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

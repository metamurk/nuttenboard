Template.wall.helpers({
  Categories:function() {
    return Categories.find();
  }
});

Template.wall.helpers({
	auctionlist:function() {
    $('body').removeClass('loaded');
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
     $('body').addClass('loaded');
    masonize(function(){
    })
  }, 3500);
};

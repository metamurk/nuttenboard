Template.auction.helpers({
	currentAuction: function() {
		
		return Router.current().route.path(this);
	}
});
Router.route('/', function () {
  this.render('Wall');
});

Router.route( 'Suscribe', {
  path: '/Suscribe',
  template: 'suscribe',
});

Router.route( 'Login', {
  path: '/Login',
  template: 'login',
});

Router.route( 'Profile', {
  path: '/Profile',
  template: 'profile',
});

Router.route( 'CreateAuction', {
  path: '/CreateAuction',
  template: 'createAuction',
});

Router.route( 'Messages', {
  path: '/Messages',
  template: 'messages',
});

Router.route( 'Auction/:id', {
  name:"Auction",
  data:function(){
	  return Auctions.findOne(this.params.id);
  }
});

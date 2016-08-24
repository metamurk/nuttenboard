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

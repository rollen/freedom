function Router($router){
  console.log('Router is Being Run');
  $router.get('/', 'HelloWorldController', 'index');
  $router.assets(/^\/client/, 'StaticController', 'show');
}

module.exports = Router;

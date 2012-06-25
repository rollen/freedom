function Router($router){
  $router.get('/', 'HelloWorldController', 'index');
  $router.assets(/^\/client/, 'StaticController', 'show');
}

module.exports = Router;

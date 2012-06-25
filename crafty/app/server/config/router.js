function Router($router){
  $router.get('/', 'ClientApplicationController', 'index');
  $router.assets(/^\/client/, 'StaticController', 'show');
}

module.exports = Router;

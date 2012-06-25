require('../spec_helper');

Given('I define a factory with a template object', function(){
  var factoryService, 
  instance, 
  template,
  database,
  name;

  beforeEach(function(){
    database = {};
    factoryService = FactoryService(database);
    name = 'job';
    template = {'name':'rollen'};

    factoryService.define(name, template);
  });

  When('I create an instance of the object', function(){
    beforeEach(function(){
      instance = factoryService.create('job');
    });

    Then('instance should be based on the template', function(){
      expect(instance).toEquateJsonObject(template);
    });
  });
});

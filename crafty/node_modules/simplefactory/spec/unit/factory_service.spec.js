require('../spec_helper');

describe('FactoryService', function(){
  var system_under_test,
  database,
  template,
  record,
  name;

  beforeEach(function(){
    database = {}; 
    system_under_test = FactoryService(database);
  });

  describe('.define', function(){
    it('saves the object template to its database', function(){
      template = {'name':'Rollen Gomes'}; 
      name = 'person';
      system_under_test.define(name, template);
      expect(database['person']).toBe(template);
    });
  });

  describe('.create', function(){
    beforeEach(function(){
      template_name = 'job';
      template_prototype = {'name':'Rollen', 'age':'26'};
      database[template_name] = template_prototype;

      system_under_test = FactoryService(database);
    });

    it('throws an error when the template of a record is not in the database', function(){
      var expectation_error = new Error('Template templatethatdoesnotexist was not defined');
      expect(function(){system_under_test.create('templatethatdoesnotexist');}).toThrow(expectation_error);
    });


    it('returns an object that has all the attributes of the template', function(){
      expect(system_under_test.create(template_name)).toEquateJsonObject({'name':'Rollen', 'age':'26'}); 
    });

    it('accepts a hash to override attributes', function(){
      record = system_under_test.create(template_name, {'name':'World'});
      expect(record).toEquateJsonObject({'name':'World', 'age':'26'});
    });

    it('does not mutate the original template', function(){
      var mutated_record = system_under_test.create(template_name, {'name':'World'});

      record = system_under_test.create(template_name, {});
      expect(record).toEquateJsonObject(template_prototype);
    });
  });
});

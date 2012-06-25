FactoryService = function(database){
  function assertDefinedRecordName(template, recordname){
    if(!template){
      throw ("Template " + recordname + " was not defined");
    }
  }

  function clone(template){
    var obj = {};
    for(key in template){
      if(template.hasOwnProperty(key)){
        var value;
        if((typeof template[key]) === 'object'){
          value = clone(template[key]);
        }else {
          value = template[key];
        }
        obj[key] = value;
      }
    }
    return obj;
  }

  var object = {};
  object.define = function(name, template){
    database[name] = template; 
  }


  object.create = function(recordname, options){
    var template;
    assertDefinedRecordName(database[recordname], recordname);
    template = clone(database[recordname]);

    for(key in options){
      if(options.hasOwnProperty(key) && template.hasOwnProperty(key)){
        template[key] = options[key];
      }
    }
    return template;
  }
  return object;
}


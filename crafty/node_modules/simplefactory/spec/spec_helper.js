require('../simplefactory');

Then = it;

Given = function(string, func){
  describe('Given ' + string, func);
}

When = function(string, func){
  describe('When ' + string, func);
}

And = function(string, func){
  describe('And ' + string, func);
}

//matchers

beforeEach(function(){
  this.addMatchers({
    toEquateJsonObject: function(expected){
      var keys =  function(obj){
        var keys = [];
        for(var key in obj){
          if(obj.hasOwnProperty(key)) {    
            keys.push(key);
          }
        }
        return keys;
      }

      function equals(expected, actual ){
        var result = true;
        for(key in expected){
          if(expected[key] !== actual[key]){
            result = false;
            break;
          }
        }
        return result;
      }

      function jsonstring(hash){
        var str = '{ ';
        for(v in hash){
          if(hash.hasOwnProperty(v)){
            str = str + v + ':' + hash[v] + ' ';
          }
        }
        return str + '}';
      }


      var actual = this.actual;
      var self = this;
      var expected_number_of_keys = keys(expected).length;
      var acutal_number_of_keys = keys(actual).length;
      var status = false;

      if(expected_number_of_keys !== acutal_number_of_keys ){
        self.message = "Expected Object to have " + expected_number_of_keys + " number of keys " 
        + "but received " + acutal_number_of_keys + " number of keys";
      } else if(!equals(expected, actual)){
        self.message = "Expected " + jsonstring(expected) + " but received " + jsonstring(actual);
      } else {
        status = true;
      }
      return status;
    }
  });
});

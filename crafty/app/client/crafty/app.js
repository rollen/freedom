window.onload = function(){
  Crafty.init(400, 400);
  var object = Crafty.e("2D, DOM, Text");
  object.attr({ x: 100, y: 100 });
  object.text("Look at me!!");
  object.bind('KeyDown', function(e){
    console.log(e);
  });
}


// Constants
CRAFTY_FPS = 30;
CRAFTY_WIDTH = 800;
CRAFTY_HEIGHT = 600;

PLAYER_WIDTH = 50;
PLAYER_HEIGHT = 50;
PLAYER_WIDTH_HALF = PLAYER_WIDTH / 2;
PLAYER_HEIGHT_HALF = PLAYER_HEIGHT / 2;


// Global variables we need easy access to I'm keeping them as global
// variables because I have no idea how to easily search for entities
// on Crafty. Besides, it does not seem wise do to an entity-search
// each time we require access to an entity. In any case, just
// remember, there might be a better and saner way to do this

var player = Crafty.e();
var game_scene = Crafty.e();


function init_general() {

    Crafty.init(CRAFTY_WIDTH, CRAFTY_HEIGHT);
    Crafty.background("black");

    //var game_scene = Crafty.e();
    game_scene.addComponent("2D, Mouse");
    game_scene.attr({x:0, y:0, w: CRAFTY_WIDTH, h: CRAFTY_HEIGHT});
    game_scene.areaMap([0, 0], [CRAFTY_WIDTH, 0],
                       [CRAFTY_WIDTH, CRAFTY_HEIGHT], [0, CRAFTY_HEIGHT]);


}

function init_components() {

    // Create a Movement component
    Crafty.c("Movement", {

        // 1 frame to move one unit
        _speed : 1,

        init: function() {
            this.requires("2D");
            this.requires("Tween");
        },

        // speed specified is in number of frames per unit
        movement: function(speed) {
            this._speed = speed;
        },

        moveTo: function(moveToX, moveToY) {

            var x1 = this._x;
            var x2 = moveToX;
            var y1 = this._y;
            var y2 = moveToY;

            var dist = Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2);
            dist = Math.sqrt(dist);
            var time = Math.floor(this._speed * dist);

            this.tween({x: x2, y: y2}, time)
        }

    });

    
    // Create a Waypoint component
    Crafty.c("Waypoint", {
	
	_x1: null,
	_y1: null,
	_x2: null,
	_y2: null,

	init: function() {
	    this.requires("Movement");
	    
	},

	

    });
}



function init_player() {
    //var player = Crafty.e();
    player.addComponent("2D, DOM, Mouse");
    player.addComponent("Color").color("red");
    player.addComponent("Movement").movement(0.1);
    player.attr({x:0, y:0, w: PLAYER_WIDTH, h: PLAYER_HEIGHT});


}

function init_controls() {


    game_scene.bind("Click", function(e) {

        // Need to center the entity, hence the subtraction
        var moveToX = e.realX - PLAYER_WIDTH_HALF;
        var moveToY = e.realY - PLAYER_HEIGHT_HALF;

        player.moveTo(moveToX, moveToY);

    });
}

function do_magic() {

    // Init everything here (order of init matters)
    init_general();
    init_components();
    init_player();
    init_controls();

}



// window.onload = function() {
//     do_magic();
// }

window.onload = do_magic;

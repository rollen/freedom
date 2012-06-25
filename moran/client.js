// Your client-specific code goes in this class
GameClient = new IgeClass({
	ige: null, // Holds a reference to the engine instance
	
	init: function (engine) {
		this._className = 'GameClient';
		this.ige = engine;
	},
	
	///////////////////////////////
	// START OF REQUIRED METHODS //
	///////////////////////////////
	// This is called when the engine wants you to hook engine events
	engineHooks: function () {},
	
	// This is called when the engine is ready to use
	ready: function () {
		this.log('Client ready!');
	},
	///////////////////////////////
	// END OF REQUIRED METHODS   //
	///////////////////////////////
});
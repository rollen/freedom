/* CEXCLUDE */
// Your server-specific code goes in this class
GameServer = new IgeClass({
	ige: null, // Holds the engine instance
	
	init: function (engine) {
		this._className = 'GameServer';
		this.ige = engine;
	},
	
	///////////////////////////////
	// START OF REQUIRED METHODS //
	///////////////////////////////
	// This is called when the engine wants you to hook engine events
	engineHooks: function () {},
	
	// This is called when the engine wants you to load all your modules
	modules: function () {},
	
	// This is called when the engine wants you to hook module events
	moduleHooks: function () {},
	
	// This is called when the engine wants you to load all your data
	data: function () {
		this.ige.loadData({
			'templates':{},
			'screens':{},
			'animations':{},
			'assets':{},
			'entities':{}
		});
	},
	
	// This is called when the engine is ready to use
	ready: function () {
		this.ige.network.allowConnections(true);
	},
	///////////////////////////////
	// END OF REQUIRED METHODS   //
	///////////////////////////////
});
/* CEXCLUDE */
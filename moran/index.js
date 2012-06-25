// Your game code goes that runs on both client AND server goes inside this class
Game = new IgeClass({
	ige: null, // Contains our engine instance
	client: null, // Contains our game client instance
	server: null, // Contains our game server instance
	version: '0.0.1', // The game version number
	
	init: function (engine, client, server) {
		this._className = 'Game';
		this.ige = engine;
		this.client = client;
		this.server = server;
		this.log('Game version ' + this.version);
	},
	
	///////////////////////////////
	// START OF REQUIRED METHODS //
	///////////////////////////////
	// This is called when the engine wants you to set all your network settings
	networkInit: function () {
		this.ige.network.useBison(false);
		this.ige.network.useManifest(true);
		this.ige.network.setProvider('offline');
		this.ige.network.debug = false;
		
		if (this.ige.isServer) { // If the engine is running as a server...
			this.ige.network.providerInit(); // Initialise the network provider
			this.ige.network.start(); // Start networking
		}
		if (!this.ige.isServer) { // If the engine is running as a client...
			//this.ige.network.setOptions({gameServer:'http://server_ip_or_domain:server_port'});
			this.ige.network.useStats(true); // Tell the networking system to keep stats data for debug
			this.ige.network.providerInit(); // Initialise the network provider
		}
	},
	
	// This is called when the engine wants you to hook engine events
	engineHooks: function () {
		/* CEXCLUDE */
		if (this.ige.isServer) {
			this.server.engineHooks();
		}
		/* CEXCLUDE */
		if (!this.ige.isServer) {
			this.client.engineHooks();
		}
	},
	
	// This is called when the engine wants you to register all your network commands
	networkCommands: function () {},
	
	// This is called when the engine wants you to load all your modules
	modules: function () {},
	
	// This is called when the engine wants you to hook module events
	moduleHooks: function () {},
	
	// This is called when the engine wants you to load all your data
	data: function () {
		/* CEXCLUDE */
		if (this.ige.isServer) {
			this.server.data();
		}
		/* CEXCLUDE */
	},
	
	// This is called when the engine is ready to use
	ready: function () {
		/* CEXCLUDE */
		if (this.ige.isServer) {
			this.server.ready();
		}
		/* CEXCLUDE */
		
		if (!this.ige.isServer) {
			this.client.ready();
		}
	},
	///////////////////////////////
	// END OF REQUIRED METHODS   //
	///////////////////////////////
	
});
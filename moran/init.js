if (typeof(AppMobi) == 'undefined') {
	window.igeDebug = true;
	window.igeDebugLog = [];
	window.igeDebugLevel = ['info', 'log', 'warning', 'depreciated', 'error'];
	window.igeDebugBreakOnError = true;
	
	// Define our engine and game instance variables
	window.ige = null;
	
	// Create the bootstrap instance and ask it to load our engine files
	window.igeBootstrap = new IgeBootstrap(onBoot);
	window.igeBootstrap.init(window.clientDeploy);
	
	// Process the bootstrap in 200ms
	setTimeout(function () { window.igeBootstrap.process.apply(window.igeBootstrap); }, 200);
	
	function onBoot () {
		$(document).ready(function () {
			Init = new IgeClass({
				init: function () {
					this._className = 'Init';
					this.log('jQuery says DOM is ready');
					
					// Setup engine instance
					this.log('Setting up engine instance');
					window.ige = new IgeEngine();
					window.ige.defaultContext = '2d'; // Set default canvas context
					
					// Create the server script instance and pass the ige as the engine
					window.ige.server = {}; //new this.sandbox.GameServer(ige);
					// Create the client script instance and pass the ige as the engine
					window.ige.client = new GameClient(window.ige);
					// Create the game script instance and pass the client and server instance variables
					window.ige.game = new Game(window.ige, window.ige.client, window.ige.server);
					
					window.ige.network.on('networkProviderReady', this.bind(function () {
						// Setup engine hooks
						this.log('Setting up engine hooks');
						safeCall(window.ige.game, 'engineHooks');
						
						// Register the game network commands
						this.log('Registering network commands');
						safeCall(window.ige.game, 'networkCommands');
						
						// Register the game network commands
						this.log('Loading modules...');
						safeCall(window.ige.game, 'modules');
						
						// Connect to the server
						this.log('Setting engine as ready');
						safeCall(window.ige.game, 'ready');
					}), null, true);
					
					// Setup network
					this.log('Setting up network provider');
					safeCall(window.ige.game, 'networkInit');
				}
			});
			init = new Init();
		});
	}
} else {
	// AppMobi handler
	var onDeviceReady = function() {
		console.log('AppMobi Device Ready');
		document.removeEventListener("appMobi.device.ready", onDeviceReady, false);
		AppMobi.display.useViewport(320, 480);
		AppMobi.device.hideSplashScreen();
		AppMobi.canvas.load("./engine/IgeBootstrap.js");
		AppMobi.canvas.load("./clientConfig.js");
		AppMobi.canvas.load("./init_appMobi.js");
	};

	document.addEventListener("appMobi.device.ready", onDeviceReady, false);
	
	// Check if we're running on DirectCanvas
	if (typeof(AppMobi) != 'undefined') {
		window.ige.setOption('directCanvas', true);
	}
}
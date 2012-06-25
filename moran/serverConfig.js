/** config.js - This is the server-side game configuration file for the 
Isogenic Game Engine server. {
	category:"file",
} **/

// Define the igeConfig object as the node.js exports object so that our
// object data is accessible to scripts that require this file.
var igeConfig = exports;

/** gameName - The name of the game this config file is for. {
	category:"config", 
	type:"object",
} **/
/* IGE_GAME_NAME { */
igeConfig.gameName = 'blank';
/* } */

/** debug - The engine's debug mode settings. This is used to determine the
output and level of the engine's console debug messages. {
	category:"config", 
	type:"object",
} **/
igeConfig.debug = {
	on:true,
	level: ['log', 'info', 'warning', 'depreciated', 'error'],
	breakOnError: true, // Set to true to terminate the engine runtime when an engine error is thrown
};

/** db - The server's database configuration object. Set your database parameters
in this object. {
	category:"config",
	type:"object",
} **/
igeConfig.db = {
	type:'mongo',
	host:'localhost',
	//database:'', // If no database name is specified, the igeConfig.gameName is used
	strict:false,
	nativeParser:false,
};

/** serverDeploy - The list of engine files the server will load into memory to run.
Generally you do not want to edit this list unless you know what you're doing! {
	category:"config",
	type:"array",
	index:"integer",
} **/
igeConfig.serverDeploy = [
	// Libraries
	'./engine/lib_json',
	'./engine/lib_bison',
	// Engine Core classes
	'./engine/IgeConstants',
	'./engine/IgeClass',
	'./engine/IgeBase',
	'./engine/IgeEnum',
	'./engine/IgeEvents',
	'./engine/IgeCollection',
	'./engine/IgeItem',
	'./engine/IgeState',
	// Networking classes
	'./engine/IgeNetwork_Packet',
	'./engine/IgeNetwork',
	'./engine/IgeNetworkItem',
	'./engine/IgeNetworkProvider_SocketIO',
	'./engine/IgeNetworkProvider_Pusher',
	'./engine/IgeNetworkProvider_Offline',
	// Database etc
	'./engine/IgeDatabase',
	'./engine/IgeDbMongo',
	// Engine Game classes
	'./engine/IgeUtils',
	'./engine/IgeDataCrud',
	'./engine/IgeDataLoader',
	'./engine/IgeTemplates',
	'./engine/IgeTransform',
	'./engine/IgeAnimations',
	'./engine/IgePaths',
	'./engine/IgeUsers',
	'./engine/IgeAssets',
	'./engine/IgeEntities',
	'./engine/IgeScreens',
	'./engine/IgeDirtyRects',
	'./engine/IgeMaps',
	'./engine/IgeCameras',
	'./engine/IgeViewports',
	'./engine/IgeBackgrounds',
	'./engine/IgeRenderer',
	'./engine/IgeTime',
	'./engine/IgeIdFactory',
	'./engine/IgePallete',
	'./engine/IgeWindow',
	// Physics module
	'./engine/modules/IgeBox2d/lib_box2d',
	'./engine/modules/IgeBox2d/index',
	// The net stream modules
	'./engine/modules/IgeNetStream/IgeNetStream',
	// The entity UI system module
	'./engine/modules/IgeUi/index',
	// The tweening manager module
	'./engine/modules/IgeTween/index',
	// The visual editor module
	'./engine/modules/IgeEditor/index',
	// The Facebook module
	'./engine/modules/IgeFacebook/index',
	// The engine control class
	'./engine/IgeEngine',
	// The game classes
];

/** clientDeploy - The list of engine files the client will load into memory to run.
Generally you do not want to edit this list unless you know what you're doing! This
list is also used by the server to generate the ./engine/_deploy.js file. {
	category:"config",
	type:"array",
	index:"integer",
} **/
igeConfig.clientDeploy = [
	// Libraries
	'./engine/lib_json',
	'./engine/lib_bison',
	'./engine/lib_stack',
	//'./engine/lib_limb',
	// Engine Core Classes
	'./engine/IgeConstants',
	'./engine/IgeClass',
	'./engine/IgeBase',
	'./engine/IgeEnum',
	'./engine/IgeEvents',
	'./engine/IgeCollection',
	'./engine/IgeItem',
	'./engine/IgeState',
	// Networking classes
	'./engine/IgeNetwork_Packet',
	'./engine/IgeNetwork',
	'./engine/IgeNetworkItem',
	'./engine/IgeNetworkProvider_SocketIO',
	'./engine/IgeNetworkProvider_Pusher',
	'./engine/IgeNetworkProvider_Offline',
	// Render classes
	'./engine/IgeCanvas',
	'./engine/IgeHtml',
	// Engine Game Classes
	'./engine/IgeUtils',
	'./engine/IgeDataCrud',
	'./engine/IgeDataLoader',
	'./engine/IgeTemplates',
	'./engine/IgeTransform',
	'./engine/IgeAnimations',
	'./engine/IgePaths',
	'./engine/IgeUsers',
	'./engine/IgeAssets',
	'./engine/IgeEntities',
	'./engine/IgeScreens',
	'./engine/IgeDirtyRects',
	'./engine/IgeMaps',
	'./engine/IgeCameras',
	'./engine/IgeViewports',
	'./engine/IgeBackgrounds',
	'./engine/IgeRenderer',
	'./engine/IgeTime',
	'./engine/IgeIdFactory',
	'./engine/IgePallete',
	'./engine/IgeWindow',
	// Physics module
	'./engine/modules/IgeBox2d/lib_box2d',
	'./engine/modules/IgeBox2d/index',
	// The net stream modules
	'./engine/modules/IgeNetStream/IgeNetStream',
	'./engine/modules/IgeNetStream/IgeInterpolate',
	// The entity UI system module
	'./engine/modules/IgeUi/index',	
	// The tweening manager module
	'./engine/modules/IgeTween/index',
	// The layout manager module
	'./engine/modules/IgeLayouts/index',
	// The visual editor module
	'./engine/modules/IgeEditor/index',
	// The Facebook module
	'./engine/modules/IgeFacebook/index',	
	// The engine control class
	'./engine/IgeEngine',
	// The client game files
	'index',
	'client',
];

/** nodeModules - A list of node modules that are required to successfully
start the server-side engine. The server will check for the existence of these
modules before starting the game-server. {
	category:"config",
	type:"array",
	index:"integer",
} **/
igeConfig.nodeModules = [          
	'canvas', // Used to create images server-side
	'cli-color', // Used to output colourful console debug info
	//'express', // Not required by default in 1.0.0
	'facebook-graph', // Used to connect to the FB API from Node.js
	//'forever', // Not actually required to run the engine
	//'http-proxy', // Not required when serving files from a separate HTTP server
	'imagemagick', // Used to get details about images such as width and height etc
	//'ige_image_gen', // Depreciated in 1.0.0
	'mkdirp', // Creates folders easily
	'mongodb', // Allows connection to mongodb from Node.js
	//'mysql', // Not required until the mysql DB provider is ready (probably 0.2.7)
	//'node-static', // Depreciated in 1.0.0
	//'pusher-pipe', // Not required if you don't use pusher
	//'rimraf', // A toolset for cli equiv of rm recursive - only required by GameHost
	'socket.io', // Socket.IO networking library
	'uglify-js', // Used by the server to generate obfuscated + minified JS
	'wrench', // A toolset of cli utils
];
// (function(){
	var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'world');
	var states = {
		'Boot': EPT.Boot,
		'Preloader': EPT.Preloader,
		'MainMenu': EPT.MainMenu,
		'Achievements': EPT.Achievements,
		'Story': EPT.Story,
		'Game': EPT.Game,
        'State001' : bonsanto.State001,
        'State002' : bonsanto.State002,
        'State003' : bonsanto.State003
	};
	for(var state in states)
		game.state.add(state, states[state]);
	game.state.start('Boot');
// })();

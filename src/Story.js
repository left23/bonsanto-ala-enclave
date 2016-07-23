EPT.Story = function(game) {};
EPT.Story.prototype = {
	create: function(){

        this.add.sprite(0, 0, 'background');
		//var textStory = this.add.text(100, 75, 'Story screen', { font: "32px Arial", fill: "#fff" });
		var buttonContinue = this.add.button(this.world.width-20, game.world.height-20, 'button-continue', this.clickContinue, this, 1, 0, 2);
		buttonContinue.anchor.set(1,1);
		buttonContinue.x = this.world.width+buttonContinue.width+20;
		
		this.add.tween(buttonContinue).to({x: this.world.width-20}, 500, Phaser.Easing.Exponential.Out, true);

        chapterText();

	},
	clickContinue: function() {
		if(EPT._audioStatus) {
			EPT._soundClick.play();
		}

		this.game.state.start('State001');
	}
};

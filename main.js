function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_die = loadSound("mariodie.wav")
	mario_kick = loadSound("kick.wav")
	game_over = loadSound("gameover.wav")
	coin_collect = loadSound("coin.wav")

	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	posenet = ml5.poseNet(video,modeLoaded);
	posenet.on('pose',gotPoses)
}

function modeLoaded(){
	console.log("Model Loaded!")
}

function draw() {
	game()
	
}

function gotPoses(results){

	if(results.length > 0){
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	
	}

}







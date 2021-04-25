var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form, game;
var player1,player2;
var players;
var cake;
var candy;
var veg;
var cakeGroup;
var cake1_img, cake2_img, cake3_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  cake1_img = loadImage("images/cake1.png");
  cake2_img = loadImage("images/cake2.png");
  candy1_img = loadImage("images/candy1.png");
  candy2_img = loadImage("images/candy2.png");
  cake3_img = loadImage("images/cake3.png");
  vegetable1_img = loadImage("images/vegetable1.png");
  vegetable2_img = loadImage("images/vegetable2.png");
  vegetable3_img = loadImage("images/vegetable3.png");
  mouth1_img = loadImage("images/mouth1.png");
  mouth2_img = loadImage("images/mouth2.png");
  back_img = loadImage("images/background.jpg");
  cakeGroup = new Group();
  candyGroup = new Group();
  vegGroup = new Group();
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
if(playerCount===2){
  game.update(1)
}
if(gameState===1){
  game.play();
}
if(gameState===2){
  game.end();
}

}
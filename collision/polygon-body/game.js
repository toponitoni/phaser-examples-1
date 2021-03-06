// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var sprite1, sprite2, assets, gPreload, gCreate, gUpdate, gRender, collisionHandler, g;
  assets = '../../../phaser/examples/assets/';
  gPreload = function(){
    g.load.image('parsec', assets + 'sprites/parsec.png');
    g.load.image('spaceman', assets + 'sprites/exocet_spaceman.png');
  };
  gCreate = function(){
    g.stage.backgroundColor = '#2d2d2d';
    sprite1 = g.add.sprite(550, 250, 'parsec');
    sprite1.name = "Lamborghini";
    sprite1.body.setPolygon(56, -1, 10, -5, 1, -13, 0, -34, 55, -60, 112, -78, 165, -80, 214, -74, 285, -71, 296, -44, 298, -12, 292, -5, 168, -3);
    sprite1.body.translate(0, 80);
    sprite1.body.velocity.x = -100;
    sprite2 = g.add.sprite(0, 200, 'spaceman');
    sprite2.name = "Spaceman";
    sprite2.body.setPolygon(34, -172, 75, -172, 87, -145, 121, -52, 105, -16, 55, -3, 9, -19, 1, -57, 24, -145);
    sprite2.body.translate(0, 175);
    sprite2.body.velocity.x = 100;
  };
  gUpdate = function(){
    g.physics.collide(sprite1, sprite2, collisionHandler, null, this);
  };
  gRender = function(){
    g.debug.renderPhysicsBody(sprite1.body);
    g.debug.renderPhysicsBody(sprite2.body);
  };
  collisionHandler = function(sprite1, sprite2){
    g.stage.backgroundColor = '#992d2d';
    return console.log(sprite1.name + " collided with " + sprite2.name + "!!onne11");
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);

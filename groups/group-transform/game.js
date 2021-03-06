// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, robot, eye, body, leftArm, rightArm, leftLeg, rightLeg, gPreload, gCreate, gUpdate, gRender, g;
  map = require('prelude-ls').map;
  gPreload = function(){
    g.load.image('eye', '../../../phaser/examples/assets/sprites/robot/eye.png');
    g.load.image('body', '../../../phaser/examples/assets/sprites/robot/body.png');
    g.load.image('arm-l', '../../../phaser/examples/assets/sprites/robot/arm-l.png');
    g.load.image('arm-r', '../../../phaser/examples/assets/sprites/robot/arm-r.png');
    g.load.image('leg-l', '../../../phaser/examples/assets/sprites/robot/leg-l.png');
    g.load.image('leg-r', '../../../phaser/examples/assets/sprites/robot/leg-r.png');
  };
  gCreate = function(){
    var offsetX, offsetY;
    offsetX = 0;
    offsetY = 0;
    robot = g.add.group();
    leftArm = robot.create(offsetX + 90, offsetY + 175, 'arm-l');
    rightArm = robot.create(offsetX + 549, offsetY + 175, 'arm-r');
    leftLeg = robot.create(offsetX + 270, offsetY + 325, 'leg-l');
    rightLeg = robot.create(offsetX + 410, offsetY + 325, 'leg-r');
    body = robot.create(offsetX + 219, offsetY + 32, 'body');
    eye = robot.create(offsetX + 335, offsetY + 173, 'eye');
    robot.setAll('inputEnabled', true);
    robot.callAll('input.enableDrag', 'input');
  };
  gUpdate = function(){};
  gRender = function(){
    g.debug.renderText('The robot is a group and every component is a sprite.', 240, 580);
    g.debug.renderText('Drag each part to reposition them. ', 288, 592);
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);

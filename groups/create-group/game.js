// Generated by LiveScript 1.2.0
(function(){
  'use strict';
  var map, firstGroup, gPreload, gCreate, gUpdate, gRender, createSprite, g;
  map = require('prelude-ls').map;
  gPreload = function(){
    return g.load.image('sonic', '../../../phaser/examples/assets/sprites/sonic_havok_sanity.png');
  };
  gCreate = function(){
    firstGroup = g.add.group();
    return map(createSprite, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };
  gUpdate = function(){};
  gRender = function(){};
  createSprite = function(i){
    var s;
    return s = firstGroup.create(g.world.randomX, g.world.randomY, 'sonic');
  };
  g = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: gPreload,
    create: gCreate,
    update: gUpdate,
    render: gRender
  });
}).call(this);

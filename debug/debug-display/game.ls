'use strict'
assets = \../../../phaser/examples/assets/
var sprite
counter = 0
step = Math.PI * 2 / 360

g-preload = !->
  g.load.image \sprite assets+\sprites/phaser2.png

g-create = !->
  sprite := g.add.sprite 0 0 \sprite
  sprite.alpha = 0.5
  sprite.x = g.width / 2 
  sprite.anchor.set-to 0.5 0.5

g-update = !->
  t-step = Math.sin counter
  sprite.y = g.height / 2 + t-step * 30
  sprite.rotation += Phaser.Math.degToRad 0.1 * t-step
  counter += step

g-render = !->
  g.debug.render-sprite-bounds sprite
  g.debug.render-sprite-corners sprite, true, true

g = new Phaser.Game(800, 600, Phaser.CANVAS, '',
  preload: g-preload, create: g-create, update: g-update, render: g-render)

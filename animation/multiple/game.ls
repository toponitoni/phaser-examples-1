'use strict'

game = new Phaser.Game(
  800, 600, Phaser.AUTO, '',
  preload: preload
  create: create
)

function preload()
  game.load.atlas-XML \seacreatures \../../../phaser/examples/assets/sprites/seacreatures.png \../../../phaser/examples/assets/sprites/seacreatures.xml

  game.load.image \undersea \../../../phaser/examples/assets/pics/undersea.jpg
  game.load.image \coral \../../../phaser/examples/assets/pics/seabed.png

function create()

  game.add.sprite 0 0 \undersea

  jellyfish = game.add.sprite 670 20 \seacreatures

  # jellyfish uses the frames blueJellyfish0000 -> 32 in atlas-XML
  # we can use generate-frame-names() to create these frames for us
  jellyfish.animations.add \swim, gfn(\blueJellyfish, 0, 32, '', 4), 30, true
  jellyfish.animations.play \swim

  crab = game.add.sprite 550 480 \seacreatures
  crab.animations.add \swim, gfn('crab1', 0, 25, '', 4), 30, true
  crab.animations.play \swim

  greenJellyfish = game.add.sprite 330, 100, \seacreatures
  greenJellyfish.animations.add \swim, gfn('greenJellyfish', 0, 39, '', 4), 30, true
  greenJellyfish.animations.play \swim

  octopus = game.add.sprite 160, 400, \seacreatures
  octopus.animations.add \swim, gfn('octopus', 0, 24, '', 4), 30, true
  octopus.animations.play \swim

  purpleFish = game.add.sprite 800, 413, \seacreatures
  purpleFish.animations.add \swim, gfn('purpleFish', 0, 20, '', 4), 30, true
  purpleFish.animations.play \swim

  seahorse = game.add.sprite 491, 40, \seacreatures
  seahorse.animations.add \swim, gfn('seahorse', 0, 5, '', 4), 30, true
  seahorse.animations.play \swim

  squid = game.add.sprite 610, 215, \seacreatures, 'squid0000'

  stingray = game.add.sprite 80, 190, \seacreatures
  stingray.animations.add \swim, gfn('stingray', 0, 23, '', 4), 30, true
  stingray.animations.play \swim

  flyingfish = game.add.sprite 60, 40, \seacreatures, 'flyingFish0000'

  game.add.sprite 0 466 \coral

# abbreviation
gfn = (a, b, c, d, e) ->
  Phaser.Animation.generate-frame-names a, b, c, d, e

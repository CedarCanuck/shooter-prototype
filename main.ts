namespace SpriteKind {
    export const Rotate = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, bedi, 50, 50)
    if (goose.overlapsWith(projectile)) {
        goose.destroy()
        projectile.destroy()
        music.baDing.play()
    }
})
info.onLifeZero(function () {
    game.showLongText("You Died!", DialogLayout.Bottom)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(10)
})
let projectile: Sprite = null
let goose: Sprite = null
let bedi: Sprite = null
tiles.setTilemap(tilemap`level_0`)
bedi = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f e e e e f f f . . . 
    . . f f e e e e e e e e f f . . 
    . . f e e d f e e d f e e f . . 
    . . f e e d f e e d f e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f f e e d d d d e e f f . . 
    . . f f f f d e e d f f f f . . 
    . . . f d d d d d d d d f . . . 
    . . . . b b b b b b b b . . . . 
    . . b e e f f f e e e f f f f f 
    . . b e e e e b b b b b b b . . 
    . . b e e b b b b b b b b b . . 
    . . b b b f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Rotate)
transformSprites.rotateSprite(bedi, 0)
let positiveRotation = 10
let negativeRotation = -10
info.setLife(3)
goose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
goose.follow(bedi)
if (bedi.overlapsWith(goose)) {
    info.changeLifeBy(-1)
}
forever(function () {
    if (controller.left.isPressed()) {
        transformSprites.changeRotation(bedi, negativeRotation)
        pause(15)
    }
    if (controller.right.isPressed()) {
        transformSprites.changeRotation(bedi, positiveRotation)
        pause(15)
    }
})

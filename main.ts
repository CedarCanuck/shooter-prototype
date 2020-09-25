namespace SpriteKind {
    export const Rotate = SpriteKind.create()
}
tiles.setTilemap(tilemap`level_0`)
let mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f e e e e f f f . . . 
    . . f f e e e e e e e e f f . . 
    . . f e e d f e e d f e e f . . 
    . . f e e d f e e d f e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f f e e f f f f e e f f . . 
    . . f f f f d e e d f f f f . . 
    . . . f d d d d d d d d f . . . 
    . . . . b b b b b b b b . . . . 
    . . b e e f f f e e e f f f f f 
    . . b e e e e b b b b b b b . . 
    . . b e e b b b b b b b b b . . 
    . . b b b f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Rotate)
transformSprites.rotateSprite(mySprite, 0)
let positiveRotation = 10
let negativeRotation = -10
forever(function () {
    if (controller.left.isPressed()) {
        transformSprites.changeRotation(mySprite, negativeRotation)
        pause(15)
    }
    if (controller.right.isPressed()) {
        transformSprites.changeRotation(mySprite, positiveRotation)
        pause(15)
    }
})

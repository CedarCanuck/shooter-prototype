namespace SpriteKind {
    export const Rotate = SpriteKind.create()
}
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202020101010101010101010101020202020202010101010101010101020202020202020201010101010101010202020202020202010101010101010102020202020202020101010101010101020202020202020201010101010101010102020202020201010101010101010101010202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,myTiles.tile1], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . 8 f 8 . . . . . . 
    . . . . . . . 8 f 8 . . . . . . 
    . . . . . 8 8 f f f 8 8 . . . . 
    . . . . 8 f f f f f f f 8 . . . 
    . . . 8 f f f f f f f f f 8 . . 
    . . . 8 f 6 6 6 6 6 6 6 f 8 . . 
    . . 8 f f f f f 6 f f f f f 8 . 
    . . 8 f f f f f 6 f f f f f 8 . 
    . . 8 f f f f f 6 f f f f f 8 . 
    . . . 8 f f f f 6 f f f f 8 . . 
    . . . 8 f f f f 6 f f f f 8 . . 
    . . . . 8 f f f 6 f f f 8 . . . 
    . . . . . 8 8 f f f 8 8 . . . . 
    . . . . . . . 8 8 8 . . . . . . 
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

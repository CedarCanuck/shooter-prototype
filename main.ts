namespace SpriteKind {
    export const Rotate = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, bedi, 70 * Math.sin(angle + 90), 70 * Math.cos(angle + 90))
    scene.cameraShake(2, 100)
    music.playTone(262, music.beat(BeatFraction.Eighth))
    bulletExists = true
})
info.onLifeZero(function () {
    game.showLongText("You Died!", DialogLayout.Bottom)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(10)
})
let goose: Sprite = null
let gooseExists = false
let bulletExists = false
let projectile: Sprite = null
let bedi: Sprite = null
let angle = 0
angle = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999aaaaaa999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999aaaaaaaaaaaaa99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999aaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999aaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999aaa999999999999999999aaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999aaa9999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999aaa99999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff99999999999999999999
    999aaa999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999999999999ffffffffffffffffffffffff999999999999999999
    999aaa9999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999ffffffffffffffffffffffffff999999999999999999
    999aaa9999999fffffffff9999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999fff55555555555555555555fff999999999999999999
    999aaa9999999fffffffffffffff99999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999fff55555555555555555555fff999999999999999999
    999aaa9999999fffffffffffffffffff99999fffffff99999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa99999999999999999999fff55555555555555555555fff999999999999999999
    999aaa9999999fff9999ffffffffffff99999fffffffffffff999999999999999999999999999999aaaaaaaaaaaaaaaaaaaa9999999999999999fff555aa5555555555aa555fff999999999999999999
    999aaa9999999fff9999999999ffffff99999ffffffffffffffff9999999999999999999999999999999999aaaaaaaaaaaaa9999999999999999fff555aa5555555555aa555fff999999999999999999
    999aaa9999999fff9999999999999fff99999fff99fffffffffff999fffffff9999999999999999999999999999999aaaaaa9999999999999999fff555aa5555555555aa555fff999999999999999999
    999aaa9999999fff9999999999999fff99999fff99999999fffff999fffffffffff9999999999999999999999999999999999999999999999999fff555aa5555555555aa555fff999999999999999999
    999aaaa999999fff9999999999999fff99999fff9999999999999999ffffffffffffff9999999999999999999999999999999999999999999999fff555aa5555555555aa555fff999999999999999999
    999aaaa999999fff9999999999999fff99999fff9999999999999999fff99fffffffff9999999999999999999999999999999999999999999999fff555aa5555555555aa555fff999999999999999999
    9999aaa999999fff9999999999999fff99999fff9999999999999999fff999999fffff9999999999999999999999999999999999999999999999fff555aa5555555555aa555fff999999999999999999
    9999aaa999999fff9999999999999fff99999fff9999999999999999fff999999999fff999999fff9999999999999999999999aaa99999999999fff555aa5555555555aa555fff999999999999999999
    9999aaa999999fff9999999999999fff99999fff9999999999999999fff999999999fff999999fff9999999999999999999999aaa99999999999fff555aaa55555555aaa555fff999999999999999999
    9999aaa999999fff9999999999999fff99999fff9999999999999999fff999999999fff999999fff9999999fffff9999999999aaa99999999999fff555aaa55555555aaa555fff999999999999999999
    9999aaa999999fff9999999999999fff99999fff9999999999999999fff999999999fff999999fff9999999ffffffffff99999aaa99999999999fff5555aaa555555aaa5555fff999999999999999999
    9999aaa999999fff999999999999ffff99999fff9999999999999999fff999999999fff999999fff99999ffffffffffff99999aaa99999999999fff55555aaaaaaaaaa55555fff999999999999999999
    9999aaa999999fff999999999999ffff99999fff9999999999999999fff999999999fff999999fff99999fff99fffffff99999aaa99999999999fff555555aaaaaaaa555555fff999999999999999999
    9999aaa999999ffffffffffffffffff999999ffffffffffffff99999fff999999999fff999999fff99999fff999999fff99999aaa99999999999fff55555555555555555555fff999999999999999999
    9999aaa999999fffffffffffffffff9999999ffffffffffffff99999fff999999999fff999999fff99999fff999999fff99999aaaa9999999999fff55555555555555555555fff999999999999999999
    9999aaaa99999ffffffffffffffffff999999ffffffffffffff99999fff999999999fff999999fff99999fff99999999999999aaaa9999999999fff55555555555555555555fff999999999999999999
    9999aaaa99999fff999999999999fff999999fff9999999999999999fff999999999fff999999fff99999ffff99999999999999aaa9999999999fff55555555555555555555fff999999999999999999
    99999aaa99999fff99999999999dfff9999d9fff9999999999999999fff999999999fff999999fff99999fffffff99999999999aaa9999999999fff555aa5555555555aa555fff999999999999999999
    99999aaa99999fff99999999999dfff9999d9fff99999999d9999999fff999999999fff999999fff999999ffffff99999999999aaa9999999999fff555aa5555555555aa555fff999999999999999999
    99999aaa99999fff9999999999ddfff9999ddfff9999999ddd999999fff999999999fff999999fff999999999fffff999999999aaa9999999999fff555aa5555555555aa555fff999999999999999999
    99999aaa99999fff999999999dddfffd999ddfff9999999ddd999999fff999999999fff999999fff99999999999fff999999999aaa9999999999fff555aa5555555555aa555fff999999999999999999
    99999aaa99999fff999999999d9dffff99dddfff999999ddddd99999fff999999999fff999999fff99999999999ffffff999999aaaa999999999fff555aa555555555aa5555fff999999999999999999
    99999aaa99999fff9999999999ddffff99dddfff999999dddddd9999fff999999999fff999999fff99999999999999fff999999aaaa999999999fff5555aa55555555aa5555fff999999999999999999
    99999aaa99999fff999999999ddddfff999ddfff9999999dddd99999fff999999999fff999999fff9999fff9999999fff9999999aaa999999999fff5555aa555aa555aa5555fff999999999999999999
    99999aaa99999fff9999999999dddfffd99ddfff99999dddddd99999fff999999999fff999999fff9999fff9999999fff9999999aaa999999999fff5555aa55aaaa55aa5555fff999999999999999999
    99999aaa99999fff999999999ddddfff99dddfff999999dddddd9999fff999999999fff999999fff9999ffffffff99fff9999999aaa999999999fff5555aa5aa55aa5aa5555fff999999999999999999
    99999aaa99999fff99999999dd9ddfff99dddfff99999ddddd9dd999fff999999ffffff999999fff999999fffffffffff9999999aaa999999999fff5555aaaa5555aaaa5555fff999999999999999999
    99999aaaa9999fff9999999999dddffffddddfff9999ddddfffff999fff99ffffffffff999999fff999999fffffffff999999999aaaa99999999fff55555aa555555aa55555fff999999999999999999
    99999aaaa9999fff999999999ffffffffddddfffddfffffffffff999ffffffffffffff9999999fff99999999999ffff999999999aaaa99999999fff55555555555555555555fff999999999999999999
    999999aaa9999fff99fffffffffffffffddddffffffffffffffff999fffffffffff99999999999999999999999999999999999999aaa99999999fff55555555555555555555fff999999999999999999
    999999aaa999dffffffffffffffffffddddddfffffffffffff999999fffffff999999999999999999999999999999999999999999aaa99999999fff55555555555555555555fff999999999999999999
    999999aaa999dffffffffffffffddddddddddfffffffdddddd9999999fff999999999999999999999999d99999999999999999999aaa99999999fff55555555555555555555fff999999999999999999
    999999aaa99ddfffffff999dddddddddddddddddddddddddddd999999999999999999999999999999999dd9999999999999999999aaa99999999ffffffffffffffffffffffffff999999999999999999
    999999aaa9ddddd999999ddddddddddddddddddddddddddddddd99999999999999999999999999999999dd9999999999999999999aaa99999999ffffffffffffffffffffffffdddd9999999999999999
    999999aaa99ddd99999dddddddddddddddddddddddddddddddddd999999999999999999999999999999dddd999999999999999999aaaa9999999999fffffffffffffffffffffdd999999999999999999
    999999aaa999ddd999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddd9999d9999999999999aaaa99999999999999999999ddd999dd99dddddd999999999999999
    999999aaa9dddd99ddddddddddddddddddddddddddddddddddddddd999999999999999999999dd999999dd99999d99999999999999aaa9999999999999999999dddd9ddddddddd999999999d99999999
    999999aaa99ddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddd9999dddddd999dd9999999999999aaa999999999999999999999ddd9dddd999dd99999999d99999999
    999999aaaa99ddddddddddddddddddddddddddddddddddddddddddddd99999999999999999dddd99999dddd9999dd9999999999999aaa99999999999999999999ddd99ddddd99d99999999dddd999999
    999999aaaa99ddfffdddddddddddddddddddddddddfffddddddddddddd999999999999999999ddd9999ddddd99ddd9999999999999aaa999999999999999999ddddddddddddd9d999999999d99999999
    9999999aaa9dddfffddddddddddddddddddddddddffffdddddddddddfffffff99999999999ffffffffffffffffffff99999999999daaa9999999999999999999ddddddddddddddddd9999dddd9999999
    9999999aaaddddfffddddddddddddddddddddddddffffffdddddddddfffffffffff999999dffffffffffffffffffff99999999999daaaa99999999999d99999ddddd99ddddddddddddd999ddd9999999
    9999999aaaddddfffddddddddddddddddddddddddffffffddddddddffffffffffff9999999ffffffffffffffffffff9999999999ddaaaa99999999999d9999dddddddddddddddddddddd99ddddd99999
    9999999aaaddddfffddddddddddddddddddddddddffffffddddddddfffdddffffffff99999dddddd99dfffdd99ddd9999999999ddddaaa99999999999dd99999dddddddddddddddddddddddddd999999
    999999daaaddddfffddddddddddddddddddddddddffffffddddddddfffdddd9999fff9999ddddddddddfffdddddddddd9999999d9ddaaa99999999999dd9999dddddddddddddddddddddddddd9999999
    99999ddaaaddddfffdddddddddddddddddddddddffffffffdddddddfffddddd999fff9999999dddddddfffddddddddddddd99999dddaaa9999999999ddd9999dddddddddddddddddddddddddd9999999
    999ddddaaaddddfffdddddddddddddddddddddddffffffffdddddddfffdddddd99fff999999ddddddddfffddddddddddddddd99ddddaaa99999999999d9999dddddddddddddddddddddddddddd999999
    99dddddaaaddddfffdddddddddddddddddddddddfffddfffdddddddfffddddddd99999999ddddddddddfffddddddddddddddddd9dddaaa9999999999dddd99dddddddddddddddddddddddddddddd9999
    9ddddddaaaddddfffdddddddddddddddddddddddfffddfffdddddddffffffdddddd99999dddddddddddfffdddddddddddddddddddddaaaa9999999999dd99ddddddddddddddddddddddddddddddddd99
    dddddddaaaddddfffdddddddddddddddddddddddfffddffffddddddffffffddddddd999ddddddddddddfffdddddddddddddddddddddaaaa99999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaadddfffddddddddddddddddddddddffffddffffdddddddffffffffdddddddddddddddddddfffddddddddddddddddddddddaaa999999999dddddddddddddddddddddddddddddddddddddddd
    dddddddaaaadddfffddddddddddddddddddddddffffdddfffdddddddddffffffdddddddddddddddddddfffddddddddddddddddddddddaaa9999999999ddddddddddddddddddddddddddddddddddddddd
    ddddddddaaadddfffddddddddddddddddddddddfffddddfffdddddddddfffffffddddddddddddddddddfffddddddddddddddddddddddaaad9999999ddddddddddddddddddddddddddddddddddddddddd
    ddddddddaaadddfffddddddddddddddddddddddfffddddffffddddddddddfffffffddddddddddddddddfffddddddddddddddddddddddaaaddd9999dddddddddddddddddddddddddddddddddddddddddd
    ddddddddaaadddfffddddddddddddddddddddddfffddddffffddddddddddddffffffdddddddddddddddfffddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddaaadddfffdddddddddddddddddddddffffdddddfffddddddddddddddffffdddddddddddddddfffddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddaaadddfffdddddddddddddddddddddfffffffffffffddddddddddddddffffddddddddddddddfffddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaadddfffdddddddddddddddddddddfffffffffffffdddddddddddddddfffddddddddddddddfffdddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaadddfffdddddddddddddddddddddfffffffffffffdddddddddddddddfffddddddddddddddfffdddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaddddfffdddddddddddddddddddddfffdddddddfffddddfffddddddddfffddddddddddddddfffdddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaddddfffddddddddddddddddddddffffdddddddffffdddfffddddddddfffddddddddddddddfffdddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaddddfffddddddddddddddddddddffffdddddddffffdddfffffddddddfffddddddddddddddfffdddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaddddfffddddddddddddddddddddfffdddddddddfffddddfffffffdddfffddddddddddddddfffdddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddaaaddddfffddddddddddfffffdddddfffdddddddddfffddddfffffffffffffddddddddddddddfffdddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaaaddddfffddddddfffffffffdddddfffdddddddddffffdddfffffffffffddddddddddddddddfffddddddddddddddddddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaaaddddfffdffffffffffffffdddddfffdddddddddffffddddddffffffffdddddddddddddddddddddddddddddddddddddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaadddddfffffffffffffffddddddddfffddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaadddddfffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaadddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaaddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddaaaddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddaaaaddffffffffffffdddddffffffffffffffffdddddddddddddddddddddfffddddddfffdddddfffffffdddddddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddaaaaddffffffffffffffdddffffffffffffffffdddddfffdddddddddddfffffddddddffffddddffffffffffffddddddddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddaaadddfffdddffffffffdddffffffffffffffffdddddfffdddddddddddffffffdddddffffddddfffffffffffffddddddddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddaaadddfffddddddddfffdddddddddfffddddddddddddffffffddddddddffffffddddddfffddddfffddfffffffffdddddddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddaaadddfffddddddddfffdddddddddfffdddddddddddfffffffddddddddfffffffdddddfffddddfffdddddddffffdddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddaaadddfffddddddddfffdddddddddfffdddddddddddfffffffddddddddfffffffdddddfffddddfffddddddddffffddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaaadddfffddddddddfffdddddddddfffdddddddddddfffdffffdddddddfffdffffddddfffddddfffdddddddddfffddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaaadddfffffddddddddddddddddddfffddddddddddffffdffffdddddddfffdffffddddfffddddfffdddddddddfffddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaaddddfffffddddddddddddddddddfffddddddddddffffddffffddddddfffddffffdddfffddddfffdddddddddfffddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaaddddddfffffddddddddddddddddfffddddddddddfffdddffffddddddfffddffffdddfffddddfffdddddddddfffddddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaadddddddffffffffddddddddddddfffdddddddddffffddddfffddddddfffdddfffdddfffddddfffdddddddddfffdddddddaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaadddddddfffffffffdddddddddddfffdddddddddffffddddffffdddddfffdddffffddfffddddfffdddddddddfffdddddddaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddaaaddddddddddffffffffdddddddddfffdddddddddfffdddddffffdddddfffdddffffddfffddddfffdddddddddfffdddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddaaaadddddddddddddfffffdddddddddfffddddddddfffffffffffffdddddfffddddffffdfffddddfffdddddddddfffdddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddaaaaddddfffddddddddfffdddddddddfffddddddddffffffffffffffddddfffddddffffdfffddddfffdddddddddfffdddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddaaadddddfffddddddddfffdddddddddfffddddddddffffffffffffffddddfffdddddfffffffddddfffdddddddddfffdddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddaaadddddfffddddddddfffdddddddddfffdddddddffffddddddddffffdddfffdddddfffffffddddfffddddddddffffdddddddaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddaaadddddfffddddddddfffdddddddddfffdddddddffffddddddddffffdddfffddddddffffffddddfffdddddddfffffddddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddaaadddddfffffffdddffffdddddddddfffdddddddfffddddddddddfffdddfffddddddffffffddddfffdfffffffffffddddddaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddd
    daaaadddddffffffffffffffdddddddddfffddddddffffddddddddddffffddfffdddddddfffffddddffffffffffffffdddddddaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    daaaadddddddfffffffffffddddddddddfffddddddffffddddddddddffffddfffdddddddffffdddddffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    daaadddddddddddfffffffdddddddddddfffddddddfffddddddddddddfffddfffddddddddfffdddddffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
effects.confetti.startScreenEffect(4000)
for (let index = 0; index < 1; index++) {
    music.playMelody("A F E F D G E F ", 360)
}
pause(200)
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
tiles.placeOnTile(bedi, tiles.getTileLocation(7, 8))
scene.cameraFollowSprite(bedi)
transformSprites.rotateSprite(bedi, angle)
let positiveRotation = 10
let negativeRotation = -10
info.setLife(3)
forever(function () {
    if (!(gooseExists)) {
        goose = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(goose, sprites.castle.tileGrass1)
        goose.follow(bedi, 20)
        gooseExists = true
    }
    if (bedi.overlapsWith(goose)) {
        info.changeLifeBy(-1)
        goose.destroy()
        gooseExists = false
    }
})
forever(function () {
    pause(100)
    effects.blizzard.startScreenEffect(30)
    pause(100)
})
forever(function () {
    if (controller.left.isPressed()) {
        transformSprites.changeRotation(bedi, negativeRotation)
        angle += negativeRotation
        pause(19)
    }
    if (controller.right.isPressed()) {
        transformSprites.changeRotation(bedi, positiveRotation)
        angle += positiveRotation
        pause(19)
    }
})
forever(function () {
    while (bedi.y <= 180) {
        pause(30)
        bedi.y += 1
    }
    while (bedi.y > 75) {
        pause(30)
        bedi.y += -1
    }
})
forever(function () {
    if (bulletExists) {
        if (goose.overlapsWith(projectile)) {
            goose.destroy()
            projectile.destroy()
            music.baDing.play()
            gooseExists = false
        }
    }
})

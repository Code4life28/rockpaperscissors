let challanger = 0
let hand = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("you chose ")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    challanger = 1
    basic.showString("   now shake")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("you chose")
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    challanger = 3
    basic.showString("   now shake")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("you chose")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    challanger = 2
    basic.showString("    now shake")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("....")
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (hand == challanger) {
        basic.showString("draw")
    } else if (challanger == 1 && hand == 2) {
        basic.showString("you won")
    } else if (challanger == 1 && hand == 3) {
        basic.showString("you lost")
    } else if (challanger == 2 && hand == 1) {
        basic.showString("you lost")
    } else if (challanger == 2 && hand == 2) {
        basic.showString("draw")
    } else if (challanger == 2 && hand == 3) {
        basic.showString("you won")
    } else if (challanger == 3 && hand == 1) {
        basic.showString("you won")
    } else if (challanger == 3 && hand == 2) {
        basic.showString("you lost")
    } else if (challanger == 3 && hand == 3) {
        basic.showString("draw")
    }
})

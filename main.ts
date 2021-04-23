input.onButtonPressed(Button.A, function () {
    BitRacer.motorRun(BitRacer.Motors.M_R, 300)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    BitRacer.motorRun(BitRacer.Motors.M_L, 300)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    BitRacer.motorRun(BitRacer.Motors.All, 300)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})

input.onButtonPressed(Button.A, function () {
    change += 1
    basic.showNumber(change)
})
input.onButtonPressed(Button.B, function () {
    change += -1
    basic.showNumber(change)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < change; index++) {
        basic.showLeds(`
            . . # . .
            # # # . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
let change = 0
change = 0

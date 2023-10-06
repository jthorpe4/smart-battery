input.onButtonPressed(Button.A, function () {
    LEVEL += 25
    if (LEVEL > 100) {
        LEVEL = 0
    }
    led.plotBarGraph(
    LEVEL,
    100
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    control.waitMicros(10)
    basic.showString("" + (LEVEL))
    basic.showString("" + (input.temperature()))
    basic.showString("" + (input.lightLevel()))
    basic.clearScreen()
    led.plotBarGraph(
    LEVEL,
    100
    )
    pins.analogWritePin(AnalogPin.P0, LEVEL)
    pins.analogWritePin(AnalogPin.P1, input.temperature())
    pins.analogWritePin(AnalogPin.P2, input.lightLevel())
})
let LEVEL = 0
LEVEL = 0
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
led.plotBarGraph(
LEVEL,
100
)
basic.forever(function () {
	
})

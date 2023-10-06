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
    pins.analogWritePin(AnalogPin.P0, 10.23 * LEVEL)
    pins.analogSetPeriod(AnalogPin.P0, 200)
    led.plotBarGraph(
    LEVEL,
    100
    )
})
function Reset () {
    LEVEL = 0
    pins.digitalWritePin(DigitalPin.P0, 0)
    led.plotBarGraph(
    LEVEL,
    100
    )
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Reset()
})
let LEVEL = 0
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
Reset()
basic.forever(function () {
	
})

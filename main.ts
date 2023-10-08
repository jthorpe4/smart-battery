function readCap () {
    cap = pins.analogReadPin(AnalogPin.P1)
    percentage = cap / 10.23
    if (percentage >= 90) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (percentage >= 10) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    led.plotBarGraph(
    cap,
    1023
    )
}
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogSetPeriod(AnalogPin.P0, 200)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogSetPeriod(AnalogPin.P0, 200)
})
function Reset () {
    cap = 0
    percentage = 0
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogSetPeriod(AnalogPin.P0, 20000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Reset()
})
let percentage = 0
let cap = 0
Reset()
basic.forever(function () {
    readCap()
    control.waitMicros(4)
})

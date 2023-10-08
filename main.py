def readCap():
    global cap, percentage
    cap = pins.analog_read_pin(AnalogPin.P1)
    percentage = cap / 10.23
    if percentage >= 90:
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P12, 0)
        pins.digital_write_pin(DigitalPin.P16, 1)
    elif percentage >= 10:
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P12, 0)
        pins.digital_write_pin(DigitalPin.P16, 0)
    else:
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P12, 1)
        pins.digital_write_pin(DigitalPin.P16, 0)
    led.plot_bar_graph(cap, 1023)

def on_button_pressed_a():
    pins.analog_write_pin(AnalogPin.P0, 1023)
    pins.analog_set_period(AnalogPin.P0, 200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.analog_write_pin(AnalogPin.P0, 0)
    pins.analog_set_period(AnalogPin.P0, 200)
input.on_button_pressed(Button.B, on_button_pressed_b)

def Reset():
    global cap, percentage
    cap = 0
    percentage = 0
    pins.analog_write_pin(AnalogPin.P0, 0)
    pins.analog_set_period(AnalogPin.P0, 20000)
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.digital_write_pin(DigitalPin.P16, 0)

def on_logo_pressed():
    Reset()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

percentage = 0
cap = 0
Reset()

def on_forever():
    readCap()
    control.wait_micros(4)
basic.forever(on_forever)

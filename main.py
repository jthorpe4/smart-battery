def on_button_pressed_a():
    global LEVEL
    LEVEL += 25
    if LEVEL > 100:
        LEVEL = 0
    led.plot_bar_graph(LEVEL, 100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.YES)
    control.wait_micros(10)
    led.plot_bar_graph(LEVEL, 100)
    pins.analog_write_pin(AnalogPin.P0, 10.23 * LEVEL)
    pins.analog_set_period(AnalogPin.P0, 200)
input.on_button_pressed(Button.B, on_button_pressed_b)

LEVEL = 0
LEVEL = 0
basic.show_icon(IconNames.SMALL_HEART)
basic.show_icon(IconNames.HEART)
led.plot_bar_graph(LEVEL, 100)

def on_forever():
    pass
basic.forever(on_forever)

basic.clearScreen()
servos.P1.setStopOnNeutral(false)
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    servos.P1.setAngle(Math.map(input.lightLevel(), 0, 255, 0, 180))
})

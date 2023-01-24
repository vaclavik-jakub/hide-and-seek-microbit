basic.forever(function() {
let temperatureData = 0
let lightData = 0
let Label = ""
radio.setGroup(1)

    input.onButtonPressed(Button.A, function () {
        temperatureData = input.temperature()
        lightData = input.lightLevel()
        radio.sendValue("vaclavik", temperatureData)
        radio.sendValue("Gk082lje", lightData)
    })

    radio.onReceivedValue(function (vaclavik, Gk082lje) {
        Label = vaclavik
        serial.writeValue(Label, Gk082lje)
        
    })
   
})

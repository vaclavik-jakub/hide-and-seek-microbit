const mySerial = Utility.encodeSerial(control.deviceSerialNumber())

radio.setGroup(5)
radio.setTransmitSerialNumber(true)
radio.sendNumber(12)

radio.onReceivedNumber(function (receivedNumber: number) {
    console.log(receivedNumber)
    basic.showNumber(receivedNumber)
})

input.onButtonPressed(Button.A, function () {
    radio.sendNumber()
    console.log()
})


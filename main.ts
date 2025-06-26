Kitronik_Game_Controller.setBuzzerPin()
radio.setGroup(1)
radio.setTransmitSerialNumber(true)
class Player {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    
    public up() {
        this.y -= 1
    }
    
    public down() {
        this.y += 1
    }
    
    public left() {
        this.x -= 1
    }
    
    public right() {
        this.x += 1
    }
    
}

let player = new Player(2, 2)
basic.forever(function on_forever() {
    basic.clearScreen()
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Up)) {
        player.up()
    }
    
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Down)) {
        player.down()
    }
    
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Left)) {
        player.left()
    }
    
    if (Kitronik_Game_Controller.buttonIsPressed(Kitronik_Game_Controller.ControllerButtonPins.Right)) {
        player.right()
    }
    
    led.plot(player.x, player.y)
    radio.sendValue("x", player.x)
    radio.sendValue("y", player.y)
    basic.pause(100)
})

Kitronik_Game_Controller.set_buzzer_pin()

radio.set_group(1)
radio.set_transmit_serial_number(True)

class Player:
    def __init__(self,x,y):
        self.x = x
        self.y = y


    def up(self):
        self.y -= 1
        

    def down(self):
        self.y += 1
    
    def left(self):
        self.x -= 1
    
    def right(self):
        self.x += 1


player = Player(2,2)

def on_forever():
    basic.clear_screen()
    if Kitronik_Game_Controller.button_is_pressed(Kitronik_Game_Controller.ControllerButtonPins.UP):
        player.up()
    if Kitronik_Game_Controller.button_is_pressed(Kitronik_Game_Controller.ControllerButtonPins.DOWN):
        player.down()
        
    if Kitronik_Game_Controller.button_is_pressed(Kitronik_Game_Controller.ControllerButtonPins.LEFT):
        player.left()
    
    if Kitronik_Game_Controller.button_is_pressed(Kitronik_Game_Controller.ControllerButtonPins.RIGHT):
        player.right()
    
    led.plot(player.x,player.y)

    radio.send_value("x", player.x)
    radio.send_value("y", player.y)

    basic.pause(100)
basic.forever(on_forever)


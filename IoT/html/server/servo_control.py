# ONLY SINGLE PASS
from gpiozero import Servo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

# Use the pigpio pin factory
pigpio_factory = PiGPIOFactory()

# Initialize the servo with the pigpio pin factory
servo = Servo(18, pin_factory=pigpio_factory, min_pulse_width=0.0006, max_pulse_width=0.0023)

servo.value = 1.0  # Center position (90 degrees)
sleep(3)
servo.value = 0  # Minimum position (0 degrees)
sleep(2)
servo.value = 1.0  # Center position (90 degrees)
sleep(3)

# FOR INFINITE LOOP RUN THIS FILE ✅
# from gpiozero import AngularServo
# from time import sleep

# servo = AngularServo(18, min_pulse_width=0.0006, max_pulse_width=0.0023)

# while (True):
#     servo.angle = 90
#     sleep (3)
#     servo.angle = 0
#     sleep(2)
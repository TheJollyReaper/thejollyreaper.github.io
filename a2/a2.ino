// Setting each color of both LEDs to their respective pins
int LED1R = 3;
int LED1G = 5;
int LED1B = 6;
int LED2R = 9;
int LED2G = 10;
int LED2B = 11;

// Setting button variables to their pin numbers
int red_button = 4;
int green_button = 7;
int blue_button = 8;

// Boolean to keep track of whether or not the LEDs are currently on
boolean fading = false;

void setup() {
  // All the RGB pins get initialized as outputs, because they output light
  pinMode(LED1R, OUTPUT);
  pinMode(LED2R, OUTPUT);
  pinMode(LED1G, OUTPUT);
  pinMode(LED2G, OUTPUT);
  pinMode(LED1B, OUTPUT);
  pinMode(LED2B, OUTPUT);

  // Initialize the potentiometer as an input
  pinMode(A0, INPUT);

  // Initialize the built-in UNO Led as an output
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {

  // If red button is pressed and the LEDs are NOT already on, set both of the red pins to max brightness and then decrease it by 5
  // on a dynamic interval based on the current reading from the potentiometer
  // Once the LEDs are done, set fading to false in order to start reading button presses again.
  // The built-in board LED turns on when it's actively ignoring button presses  
  if (digitalRead(red_button) == 1 && !fading) {
    fading = true;
    for (int brightness = 255; brightness > -5; brightness -= 5) {
      digitalWrite(LED_BUILTIN, HIGH);
      analogWrite(LED1R, brightness);
      analogWrite(LED2R, brightness);
      delay(analogRead(A0) * 4);
      digitalWrite(LED_BUILTIN, LOW);
    }
    fading = false;
  }

  // Same as previous function, but with green button and green pins
  if (digitalRead(green_button) == 1 && !fading) {
    fading = true;
    for (int brightness = 255; brightness > -5; brightness -= 5) {
      digitalWrite(LED_BUILTIN, HIGH);
      analogWrite(LED1G, brightness);
      analogWrite(LED2G, brightness);
      delay(analogRead(A0) * 4);
      digitalWrite(LED_BUILTIN, LOW);
    }
    fading = false;
  }

  // Same as previous two functions, but with blue button and blue pins
  if (digitalRead(blue_button) == 1 && !fading) {
    fading = true;
    for (int brightness = 255; brightness > -5; brightness -= 5) {
      digitalWrite(LED_BUILTIN, HIGH);
      analogWrite(LED1B, brightness);
      analogWrite(LED2B, brightness);
      delay(analogRead(A0) * 4);
      digitalWrite(LED_BUILTIN, LOW);
    }
    fading = false;
  }
}

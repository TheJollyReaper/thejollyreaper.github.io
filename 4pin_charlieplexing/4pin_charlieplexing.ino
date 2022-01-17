// Set initial interval between LEDs
int interval = 500;

// Turns on each LED one at a time at the set interval
// Interval speed between each LED goes down by 100ms every loop,
// resets to 500 once it hits zero
void loop() {
  // Once interval time hits 0 ms, reset back to 500ms  
  if (interval == 0) {
    interval = 500;
  }
  // setLED takes two pin numbers, the first will be set to LOW, the second to HIGH    
  setLED(3,4);
  // delays execution of code by 'interval' milliseconds
  delay(interval);
  setLED(4,5);
  delay(interval);
  setLED(5,6);
  delay(interval);
  setLED(6,5);
  delay(interval);
  setLED(5,4);
  delay(interval);
  setLED(4,3);
  delay(interval);
  setLED(6,4);
  delay(interval);
  setLED(4,6);
  delay(interval);
  setLED(3,5);
  delay(interval);
  setLED(5,3);
  delay(interval);
  setLED(3,6);
  delay(interval);
  setLED(6,3);
  delay(interval);
  // reduce interval by 100 ms  
  interval -= 100;
}

// Takes two pin numbers. The first pin will be set to LOW,
// the second pin will be set to HIGH. Any pin not passed along
// will remain as an input
void setLED(int low, int high) {
  // Setting all pins to INPUT effectively clears the circuit   
  pinMode(6, INPUT);
  pinMode(5, INPUT);
  pinMode(4, INPUT);
  pinMode(3, INPUT);

  pinMode(low, OUTPUT);
  pinMode(high, OUTPUT);

  digitalWrite(low, LOW);
  digitalWrite(high, HIGH);
}

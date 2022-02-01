int sensorValue = 0;
int sensorMin = 1023;
int sensorMax = 0

void setup() {
  // put your setup code here, to run once:
  pinMode(A0, INPUT);
  pinMode(6, OUTPUT);
  Serial.begin(9600);
  
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  while (millis() < 5000) {
    sensorValue = analogRead(A0);

    if (sensorValue > sensorMax) {
      sensorMax = sensorValue;
    }

    if (sensorValue < sensorMax) {
      sensorMin = sensorValue;
    }
  }
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(analogRead(A0));
  if (analogRead(A0) < 500) {
    digitalWrite(6, LOW);
  } else {
    digitalWrite(6, HIGH);
  }
}

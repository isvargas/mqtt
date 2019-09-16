void setup() 
{
  //ligamos a serial
  Serial.begin(9600);
  
  // Colocamos o pino 12 do Arduino como OUTPUT (saída)
  pinMode(13, OUTPUT);
}

void loop() 
{
  if (Serial.available()) {
    char c = Serial.read();    

    if (c == 'L') {      
      digitalWrite(13, HIGH);
    }

    if (c == 'D') {      
      digitalWrite(13, LOW);
    }
  }  
}

void setup() 
{
  //ligamos a serial
  Serial.begin(9600);
  
  // Colocamos o pino 12 do Arduino como OUTPUT (saída)
  pinMode(13, OUTPUT);

  Serial.write("PROGRAMA INICIADO!");
}

void loop() 
{
  if (Serial.available()) {
    char c = Serial.read();
    Serial.write("Recebido: " + c);

    if (c == 'L') {
      Serial.write("LIGANDO...");
      digitalWrite(13, HIGH);
    }

    if (c == 'D') {
      Serial.write("DESLIGANDO...");
      digitalWrite(13, LOW);
    }
  }  
}

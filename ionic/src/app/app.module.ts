import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MqttModule, IMqttServiceOptions } from 'ngx-mqtt';

/*
$ npm install ngx-mqtt --save

Fonte:
https://stackoverflow.com/questions/48702611/mqtt-connection-with-ionic-3
https://sclausen.github.io/ngx-mqtt/

Obs: O server MQTT deve estar configurado para aceitas WebSocket.
No mosquito, em mosquitto.conf, add:
    listener 1883
    listener 9001
    protocol websockets

Executar com as configuracoes especificadas: 
$ mosquitto -v -c "c:\Program Files\mosquitto\mosquitto.conf"

Obs 2: O suporte a WebSocket foi implantado no Mosquitto a partir da versar 1.5.
*/


export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'soldier.cloudmqtt.com',
  port: 33919,
  path: '/',
  username: 'nmrbnrst',
  password: 'F8OUh79L_T07',
  clientId: '312312312312ljkfslkjfalskd092',
  protocol: 'wss'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

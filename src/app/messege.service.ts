// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class MessegeService {

//   constructor(
//     private socket: Socket
//   ) { }

//   sendSocketEmail(email: string){
    
//     console.log("Sended to Server: " + email);
//     this.socket.emit('setEmail', { timeStamp: Date(), email });

//   }

//   sendEmail(){ 

//     this.socket.emit('getEmail', { timeStamp: Date() });

//   }


//   notification() {
//     return this.socket.fromEvent('message').pipe(map((data: any) => data));
//   }

// }

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import * as StompJs from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {

  constructor(
    private socket: Socket
  ) { }

  sendLog(){

    this.socket.emit('/messages/notifications', "uiui");
  
  }

  notification() {
    return this.socket.fromEvent('/user/dev-valid@modalgr.com.br/messages').pipe(map((data: any) => data));
    // return this.socket.fromEvent('/messages/notifications').pipe(map((data: any) => data));
  }


}

import { Component, OnInit } from '@angular/core';
import { MessegeService } from './messege.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  socket: any;
  email!: string

  messages: any[] = [];

  constructor(
    private message: MessegeService
  ) {

  }
  ngOnInit(): void {

    this.message.notification().subscribe((data) => console.log(data));

  }

  send(){
    this.message.sendLog();
  }

}
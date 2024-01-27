import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IO';
  msgfromParent : string = "work hard and party hard"
  // msgFromChild : string = "";
  msgFromChild !: string;
  getmsg(msg : string){
    console.log(msg);
    this.msgFromChild = msg;
  }
}

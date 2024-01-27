import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() getmsgFromParent !: string;

  @Output() getMsgfromchild : EventEmitter<string> = new EventEmitter<string>(); //create custom event and emit data outside
  msg: string = 'Yes ! I will work hard' 
  constructor() { }

  ngOnInit() : void {
    // this.getMsgfromchild.emit("Yes I will work hard")
    // this.getMsgfromchild.emit(this.msg)// sending data from child to parent when comp is initialized
  }
  sendmsgtoParent(){
    this.getMsgfromchild.emit(this.msg)
  }

}

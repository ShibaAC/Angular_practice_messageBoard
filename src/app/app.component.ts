import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  content = '';
  messages: Message[] = [];


  // trim()用來去除字串兩邊的空格
  addMessage():void {
    //如果有其中一個或兩個都空白 不執行後面
    if(!this.name.trim() || !this.content.trim()){
      return;
    }
    //創建message然後把this.name跟this.content傳入建構函數
    const message = new Message(this.name , this.content);
    //.push()=>加到陣列最尾端
    this.messages.push(message);
    //把輸入框清空
    this.content = '';
  }
}

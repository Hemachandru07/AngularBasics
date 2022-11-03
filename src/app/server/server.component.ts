import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [`
    .online{
      color : white;
    }
  `]
})
export class ServerComponent{
  serverid: number = 20;
  serverstatus: string = "offline";

  constructor(){
    this.serverstatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  getServerStatus(){
    return this.serverstatus;
  }

  getcolor(){
    return this.serverstatus === "Online" ? "green" :"red";
  }
}

import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './data.service';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularpwa';
  joke:any;
  update = false
  constructor(private updates:SwUpdate,private dataService:DataService){
    this.updates.available.subscribe(event =>{
      // this.update = true
      updates.activateUpdate().then(() => document.location.reload())
    })  
  }
  ngOnInit() {
    this.dataService.getResponse().subscribe((joke) =>{
      this.joke = joke
    })
  }
  subscribeToPush() {
    // Notification.requestPermission(permission =>{
    //   if(permission == "granted") {
    //   }
    // })
  }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { mainService } from '../services/main-service';
import { DataService } from '../services/share-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    message;
    timezoneValue = "";
    
    constructor(private _shareData : DataService, private _mainService : mainService){

    }
    ngOnInit(){
        console.log("in body")
        this._shareData.currentMessage.subscribe(message =>
            { this.message = message
                console.log(this.message)
                this.getSpecificTimezone(this.message)
            })
       
        
    }

    getSpecificTimezone(message){
        if(message.length>0){
            this._mainService.getSpecificTime(message).subscribe(
                (res:any) => {
                    
                    this.timezoneValue = res.datetime.substring(11,19)
                    console.log(res)
                }
            )
        }
       
    }
}

import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { mainService } from '../services/main-service';

import { DataService } from '../services/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public timezoneList = [];
  
    constructor(private _mainService : mainService, private _shareData : DataService){

    }

    ngOnInit(){
        this.getTimezoneList()
    }
    form = new FormGroup({
      timezone: new FormControl('', Validators.required)
    });
    
 
    changeTimezone(e) {
      console.log(e.target.value);
      this._shareData.changeMessage(e.target.value)
    }

    getTimezoneList(){
        this._mainService.getTimezone().subscribe(
            res => {
                let list = res;
                console.log(res)
                for(let i=0; i<6;i++){
                    this.timezoneList.push(list[i])
                }
            
            },
            err => console.log(err)
        )
    }

   
}

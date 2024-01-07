import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accoedian',
  templateUrl: './accoedian.component.html',
  styleUrls: ['./accoedian.component.css']
})
export class AccoedianComponent implements OnInit {

  OpneIndex:number=0;

  handleClick(index:number){
    if(index===this.OpneIndex){
      this.OpneIndex=-1;
    }else{
      this.OpneIndex=index;
    }
  }

  @Input() data:any=[]

  constructor() { }

  ngOnInit(): void {
  
  }

}

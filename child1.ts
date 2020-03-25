import { Component } from '@angular/core';

@Component({
  selector:'child1',
  templateUrl:'child1.html'
})

export class ChildComponent{
  
    data:String
    temp;

        getValuefromInput(event){
            this.temp = event;
        }
        SetValue(){
            this.data=this.temp.target.value;
        }

}
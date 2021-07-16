import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  lessons=true;
  item=[
    {name:'a',age:10,id:1},
    {name:'b',age:90,id:2},
    {name:'c',age:100,id:3}
  ]
  c(){
    this.item=[
      {name:'a',age:100,id:1},
      {name:'b',age:90,id:2},
      {name:'c',age:100,id:3},
      {name:'d',age:50,id:4}
    ]
    console.log("in func")
  }



// setInterval(()=>{this.lessons=!this.lessons},4000);

  namee(index,value){
    return value.id;
  }
}

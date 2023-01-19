import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-color';

  public  colorLength : number = 6 ;
  public color : string = '';
  public colorChar : string =  '0123456789abcdef';
  public colorArray : Array<{}> = [];


  ngOnInit(){
    this.loadColor()
  }

  public createColor() {
    let newColor = ''
    for(let i = 0 ; i < this.colorLength; i++){
      let randomColor = Math.floor(Math.random()* this.colorChar.length)
       newColor += this.colorChar[randomColor];
    }
    this.color = `#${newColor}`;
    this.colorArray.push(this.color)
  }

  public loadColor(){
    let numberOfBox : number = 12; //to create box as much as you want
    for (let index = 0; index < numberOfBox; index++) {
      this.createColor()
    }
  }

  copyColor(colrName : string | any){
    navigator.clipboard.writeText(colrName).then(()=>{
      alert(`${colrName} color copied success`)
    });
  }

}

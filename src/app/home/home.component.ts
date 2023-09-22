import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  generatedValue: any;
  earthGrayscale: string = 'grayscale(100%)';

  generate(max: string, min: string){

    let maximum = Number(max);
    let minimum = Number(min);
    this.generatedValue = Math.floor(Math.random() * (maximum - minimum) + minimum)

    if(this.earthGrayscale === 'grayscale(100%)' && this.generatedValue){
      this.earthGrayscale = 'grayscale(0)';
    }else{
      this.earthGrayscale = 'grayscale(100%)';
    }
  }
}

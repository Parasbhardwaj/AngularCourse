import { Component } from '@angular/core';

@Component({
  selector: 'app-templates-exercise2',
  templateUrl: './templates-exercise2.component.html',
  styleUrls: ['./templates-exercise2.component.css']
})
export class TemplatesExercise2Component {
birthYear:number=0
category:string=""

calculateAge(age:any){
  let currentYear = new Date().getFullYear()
  this.birthYear = currentYear - age.value
  if(age.value > 21){
    this.category = "You are an Adult"
  }else if (age.value > 13 && age.value <= 21){
    this.category = "You are a teen ager"
  } else {
    this.category = "You are a kid"
  }
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-templates-exercise1',
  templateUrl: './templates-exercise1.component.html',
  styleUrls: ['./templates-exercise1.component.css']
})
export class TemplatesExercise1Component {
searchText:string=''
searchtext(bookname:any){
  this.searchText = bookname.value
}
}

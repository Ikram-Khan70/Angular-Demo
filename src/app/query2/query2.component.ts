import { Component } from '@angular/core';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css'],
})
export class Query2Component {
  executeQuery() {
    alert('Executing Query 2');
  }
}

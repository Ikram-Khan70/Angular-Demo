import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Array for 6 queries
  queries = Array(6).fill(null);

  // Function to execute query
  executeQuery(queryNumber: number) {
    alert(`Executing Query ${queryNumber}`);
  }
}

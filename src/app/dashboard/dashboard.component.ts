import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
})
export class DashboardComponent {
  progress = {
    readingToday: 32,
    writingToday: 18,
    stars: 127,
  };
}

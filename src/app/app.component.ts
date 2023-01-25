import { Component } from '@angular/core';
import { EnrollService } from './services/entroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [EnrollService]
})
export class AppComponent {
  title = 'subscribe-service';
  constructor(private enrollService: EnrollService) {

  }
}

import { Component } from '@angular/core';
import { EnrollService } from '../services/entroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
  // providers: [EnrollService]
})
export class JavascriptComponent {
  title = "javascript";

  constructor( private enrollService: EnrollService) {

  }
  onEnroll() {
    // alert('Thank you for enrolling to ' + this.title + ' course');
    // const enrollService = new EnrollService();
    this.enrollService.onEnrollClicked(this.title);
  }
}

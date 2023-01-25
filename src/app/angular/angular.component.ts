import { Component } from '@angular/core';
import { EnrollService } from '../services/entroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  // providers: [EnrollService]
})
export class AngularComponent {
title = 'Angular Js';
 constructor(private enrollService: EnrollService) {

 }
onEnroll() {
  // alert('Thank you for enrolling to ' + this.title + ' course');
  // const enrollService = new EnrollService();
  this.enrollService.onEnrollClicked(this.title);
}
}

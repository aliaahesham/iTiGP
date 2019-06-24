import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnostices',
  templateUrl: './diagnostices.component.html',
  styleUrls: ['./diagnostices.component.scss']
})
export class DiagnosticesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToDiagnostic() {
    this.router.navigateByUrl(`/questionnaire`);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showFeatures: boolean = false;
  showAutoParts: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showList(e) {
    let target: String = e.target.innerText.toLowerCase();
    if (target === "features") {
      this.showFeatures = !this.showFeatures;
    }

    if (target === "auto parts") {
      this.showAutoParts = !this.showAutoParts;

    }
  }
  navigateFromAutoPart(e) {
    let goTo: String = e.target.innerText.toLowerCase();
    if (goTo === "accessories")
      goTo = "accessory";
    else if (goTo === "spare parts")
      goTo = "spareParts";

    this.router.navigateByUrl(`/${goTo}`);

  }
  navigateFromFeatures(e) {
    let goTo: String = e.target.innerText.toLowerCase();
    if (goTo === "tutorials")
      goTo = "tutorials";
    else if (goTo === "diagnosing your car")
      goTo = "questionnaire";

    this.router.navigateByUrl(`/${goTo}`);
  }
  navigateToSellerLogin() {
    this.router.navigateByUrl(`/seller/login`);

  }
  navigateToHome() {
    this.router.navigateByUrl(``);

  }
  navigateToCars() {
    this.router.navigateByUrl(`/car`);

  }
  navigateToAboutUs(){
    this.router.navigateByUrl('/aboutus');
  }
}

import { Education } from "./../shared/models/education.model";
import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../shared/portfolio.service";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styles: []
})
export class EducationComponent implements OnInit {
  listOfEducation: Array<Education>;

  constructor(private service: PortfolioService) {}

  ngOnInit() {
    this.getEducation();
  }

  getEducation() {
    this.service.myEducation().subscribe(response => {
      this.listOfEducation = response as Array<Education>;
    });
  }
}

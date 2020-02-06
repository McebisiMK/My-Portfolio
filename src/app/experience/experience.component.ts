import { Component, OnInit } from "@angular/core";
import { Experience } from "../shared/models/experience.model";
import { PortfolioService } from "../shared/portfolio.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styles: []
})
export class ExperienceComponent implements OnInit {
  listOfExperience: Array<Experience>;
  constructor(private service: PortfolioService) {}

  ngOnInit() {
    this.getExperience();
  }

  getExperience() {
    this.service.myExperience().subscribe(response => {
      this.listOfExperience = response as Array<Experience>;
    });
  }
}

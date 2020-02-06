import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "../shared/portfolio.service";
import { Skill } from "../shared/models/skill.model";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styles: []
})
export class SkillsComponent implements OnInit {
  listOfSkills: Array<Skill>;

  constructor(private service: PortfolioService) {}

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.service.mySkills().subscribe(response => {
      this.listOfSkills = response as Array<Skill>;
    });
  }
}

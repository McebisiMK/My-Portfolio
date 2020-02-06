import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Skill } from "./models/skill.model";
import { Observable } from "rxjs";
import { Experience } from "./models/experience.model";
import { Education } from "./models/education.model";
import { Certificate } from "./models/certificate.model";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private readonly source = "assets/data";

  constructor(private http: HttpClient) {}

  mySkills() {
    return this.http.get<Array<Skill>>(this.source + "/skills.json");
  }

  myExperience() {
    return this.http.get<Array<Experience>>(this.source + "/experience.json");
  }

  myEducation() {
    return this.http.get<Array<Education>>(this.source + "/education.json");
  }

  myCertificates() {
    return this.http.get<Array<Certificate>>(
      this.source + "/certificates.json"
    );
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioService } from "./shared/portfolio.service";
import { HttpClientModule } from "@angular/common/http";
import { LanguageComponent } from './language/language.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, SkillsComponent, LanguageComponent, ExperienceComponent, EducationComponent, SocialMediaComponent, ProjectsComponent, CertificatesComponent, AboutMeComponent, BasicInfoComponent, ConferencesComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Certificate } from "./../shared/models/certificate.model";
import { PortfolioService } from "./../shared/portfolio.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-certificates",
  templateUrl: "./certificates.component.html",
  styles: []
})
export class CertificatesComponent implements OnInit {
  listOfCertificates: Array<Certificate>;

  constructor(private service: PortfolioService) {}

  ngOnInit() {
    this.getCertificates();
  }

  getCertificates() {
    this.service.myCertificates().subscribe(response => {
      this.listOfCertificates = response as Array<Certificate>;
    });
  }
}

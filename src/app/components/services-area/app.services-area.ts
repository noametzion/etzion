import {Component, OnInit} from '@angular/core';
import {ServiceInfo} from "../../entities/service-info";
import {ServicesCollectionService} from "../../Collections/services-collection";

@Component({
  selector: 'e-services-area',
  templateUrl: './app.services-area.html',
  //styleUrls: ['./app.component.css']
})

export class AppServicesArea implements OnInit{
  servicesList = new Array<ServiceInfo>();
  constructor(private servicesCollectionService: ServicesCollectionService) {
  }

  ngOnInit(): void {
    this.servicesList = this.servicesCollectionService.getServices();
  }

}

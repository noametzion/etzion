import { ServiceInfo} from "../entities/service-info";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class ServicesCollectionService {
  private servicesList: Array <ServiceInfo> = new Array<ServiceInfo>();

  constructor(){
    this.servicesList.push(new ServiceInfo(
      "Cathodic Protection",
      "Design of Cathodic Protection systems for tanks & pipelines.\n" +
      "Cathodic protection measurements according to the relative standards.\n" +
      "CIPS & DCVG surveys for pipelines and interpretation of the data.\n" +
      "AC/DC Stray current interference measurements & mitigation.\n" +
      "Cathodic protection systems construction & commissioning. (Impressed current & sacrificial anodes)\n" +
      "Deep anode bed construction (including replaceable deep anode systems).\n" +
      "Consulting in the area of Cathodic Protection systems.\n" +
      "Supply of Cathodic protection equipment.\n" +
      "Manufacture and supply of Cathodic Protection Rectifiers.\n",
      "cathodicProtection.jpg"
      ));

    this.servicesList.push(new ServiceInfo(
      "Medium voltage & low voltage electrical construction",
      "Medium voltage construction\n" +
      "Construction of medium voltage infrastructures & installations, power distribution stations & transformation stations.\n" +
      "Maintenance of medium voltage systems.\n" +
      "Locate & repair of medium cables faults.\n" +
      "Construction of apron lighting.\n" +
      "\n" +
      "Low voltage construction \n" +
      "Construction of low voltage installations for industrial plants.\n" +
      "Underground electrical infrastructures.\n" +
      "Construction of electrical installations for pump stations (fuel, water & sewage), desalination plants and sewage treatment.\n" +
      "Construction of explosion proof electrical installations for petroleum and natural gas industry.\n" +
      "Electrical installations for generator sets and power generation.\n" +
      "\n" +
      "Certification 160 A4 (electrical installations) from the contractors registry.\n",
      "electricalConstruction.jpg"
    ));

  }

  public getServices() : Array<ServiceInfo>{
     return this.servicesList;
  }
}

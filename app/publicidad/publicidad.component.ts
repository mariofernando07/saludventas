import { Component, Inject, OnInit } from "@angular/core";
import { PublicidadService } from "./shared/publicidad.service";
import { Publicidad } from "./shared/publicidad";

@Component({
    selector: "pb-publicidad",
    templateUrl: "app/publicidad/publicidad.component.html"
})
export class PublicidadComponent implements OnInit {

    public listPublicidad: Publicidad[] = [];
/*
    constructor(private publicidadService:PublicidadService ) { 
        this.listPublicidad = this.publicidadService.getPublicidad();
    }
*/
     ngOnInit() { 
        console.log("Entro ngOnInit ...");
        //this.listPublicidad = this.publicidadService.getPublicidad();
        let p1 = new Publicidad();
        p1.provedor ="Genfar";
        p1.url = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuoL6Lfk0j_0NhfOdjxooRM-F0sXFoLS4mru35-zTb3KP-IPea";
        this.listPublicidad.push(p1);
        let p2 = new Publicidad();
        p2.provedor ="MK";
        p2.url = "http://mka-world.com/wp-content/uploads/2015/11/Roche-Labs-Logo.jpg";
        this.listPublicidad.push(p2);
        let p3 = new Publicidad();
        p3.provedor ="Roche";
        p3.url = "http://ambientebogota.gov.co/image/image_gallery?uuid=e0e66547-45de-4ea9-8c42-33735838e3c3&groupId=23918&t=1362768100833";
        this.listPublicidad.push(p3); 
    }

}
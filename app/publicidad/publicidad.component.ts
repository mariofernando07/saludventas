import { Component, Inject, OnInit } from "@angular/core";
import { PublicidadService } from "./shared/publicidad.service";
import { Publicidad } from "./shared/publicidad";

@Component({
    selector: "pb-publicidad",
    templateUrl: "app/publicidad/publicidad.component.html",
    providers: [ PublicidadService ]
})
export class PublicidadComponent implements OnInit {

    public listPublicidad: Publicidad[] = [];

    constructor(private publicidadService:PublicidadService ) { 
        this.listPublicidad = this.publicidadService.getPublicidad();
    }

     ngOnInit() { 
        //console.log("Entro ngOnInit ...");        
        this.listPublicidad = this.publicidadService.getPublicidad();
        console.log(this.listPublicidad);
    }

}
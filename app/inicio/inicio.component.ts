import { Component } from "@angular/core";
import { FormRegTercero } from "../registro/registroTercero.component";
import { PublicidadComponent } from "../publicidad/publicidad.component";
@Component({
    selector: "idx-app",
    templateUrl: "app/inicio/inicio.component.html",
    directives: [ FormRegTercero, PublicidadComponent ]
})
export class InicioComponent {

}
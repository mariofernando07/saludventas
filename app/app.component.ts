import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import { FormRegTercero } from "./registro/registroTercero.component";
import { PublicidadComponent } from "./publicidad/publicidad.component";
@Component({
    selector: "init-app",
    templateUrl: "app/app.component.html",
    directives: [ FormRegTercero, PublicidadComponent ]
})
export class AppComponent {

}

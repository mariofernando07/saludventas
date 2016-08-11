import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import { FormRegTercero } from "./components/registroTercero.component";
import { PublicidadComponent } from "./components/publicidad.component";
@Component({
    selector: "init-app",
    templateUrl: "app/app.html",
    directives: [ FormRegTercero ]
})
export class AppComponent {

}
bootstrap(AppComponent);
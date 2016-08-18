import { Component } from "@angular/core";
import { NovedadComponent } from "../novedades/novedad.component";
import { LoginComponent } from "../login/login.component";
@Component({
    selector: "ing-user",
    templateUrl: "app/ingreso/ingreso.component.html",
    directives: [ NovedadComponent, LoginComponent ]    
})
export class IngresoComponent {

}
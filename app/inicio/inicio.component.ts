import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RegistroComponente } from "../registro/registro.component";
import { LoginComponent } from "../login/login.component";
import { FooterComponent } from "../footer/footer.component";
@Component({
    selector: "idx-app",
    templateUrl: "app/inicio/inicio.component.html",
    directives: [ 
        HeaderComponent, 
        RegistroComponente,
        LoginComponent,
        FooterComponent 
        ]
})
export class InicioComponent {

}
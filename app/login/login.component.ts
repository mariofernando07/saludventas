import { Component, OnInit } from "@angular/core";
import { RecuperaPassComponent } from "../recuperarpass/recuperar-pass.component";

@Component({
    selector: "ing-login",
    templateUrl: "app/login/login.component.html",
    directives:  [ RecuperaPassComponent ]
})
export class LoginComponent implements OnInit {
    titulo: string;
    ngOnInit() {
        this.titulo = "Ingresar al sistema";
    }
}
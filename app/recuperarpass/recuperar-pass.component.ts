import { Component, OnInit } from "@angular/core";
@Component({
    selector:"ing-recuperar",
    templateUrl: "app/recuperarpass/recuperar-pass.component.html"
})
export class RecuperaPassComponent implements OnInit{
    titulo: string;
    ngOnInit() {
        this.titulo = "Recuperar Contraseña";
    }
}
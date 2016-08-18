import { Component, OnInit } from "@angular/core";

@Component({
    template: "<h1>Recurso no encontrado</h1>"
})
export class NotFoundComponent implements OnInit {

    ngOnInit() {
        console.log("Inicializando NoFoundComponent");
    }

}
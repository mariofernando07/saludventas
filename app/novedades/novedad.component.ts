import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ing-novedad",
    templateUrl: "app/novedades/novedad.component.html"
})
export class NovedadComponent implements OnInit  {
    titulo: string;

    ngOnInit() {
        this.titulo = "Novedades";
    }

}
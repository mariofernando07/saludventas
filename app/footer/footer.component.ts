import { Component, OnInit } from "@angular/core";
@Component({
    selector: "tpl-footer",
    templateUrl: "app/footer/footer.component.html"
})
export class FooterComponent implements OnInit{
    anio: string;

    ngOnInit() {
        let fecha = new Date();
        this.anio = fecha.getFullYear().toString();
    }
}
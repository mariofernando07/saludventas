"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var publicidad_service_1 = require("./shared/publicidad.service");
var PublicidadComponent = (function () {
    function PublicidadComponent(publicidadService) {
        this.publicidadService = publicidadService;
        this.listPublicidad = [];
        this.listPublicidad = this.publicidadService.getPublicidad();
    }
    PublicidadComponent.prototype.ngOnInit = function () {
        //console.log("Entro ngOnInit ...");        
        this.listPublicidad = this.publicidadService.getPublicidad();
        console.log(this.listPublicidad);
    };
    PublicidadComponent = __decorate([
        core_1.Component({
            selector: "pb-publicidad",
            templateUrl: "app/publicidad/publicidad.component.html",
            providers: [publicidad_service_1.PublicidadService]
        }), 
        __metadata('design:paramtypes', [publicidad_service_1.PublicidadService])
    ], PublicidadComponent);
    return PublicidadComponent;
}());
exports.PublicidadComponent = PublicidadComponent;
//# sourceMappingURL=publicidad.component.js.map
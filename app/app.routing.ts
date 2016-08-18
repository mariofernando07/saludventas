import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { NotFoundComponent } from "./notfound/not-found.component";

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
import { Injectable } from '@angular/core';
import { Publicidad } from "./publicidad";

@Injectable()
export class PublicidadService {  
    
    getPublicidad() {
        let listPublicidad: Publicidad[] = [];
        let p1 = new Publicidad();
        p1.provedor ="Genfar";
        p1.url = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuoL6Lfk0j_0NhfOdjxooRM-F0sXFoLS4mru35-zTb3KP-IPea";
        listPublicidad.push(p1);
        let p2 = new Publicidad();
        p2.provedor ="MK";
        p2.url = "http://mka-world.com/wp-content/uploads/2015/11/Roche-Labs-Logo.jpg";
        listPublicidad.push(p2);
        let p3 = new Publicidad();
        p3.provedor ="Roche";
        p3.url = "http://ambientebogota.gov.co/image/image_gallery?uuid=e0e66547-45de-4ea9-8c42-33735838e3c3&groupId=23918&t=1362768100833";
        listPublicidad.push(p3); 
        console.log(listPublicidad);   
        return listPublicidad;            
    }
}
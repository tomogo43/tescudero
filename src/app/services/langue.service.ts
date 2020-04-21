import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LangueService {
    langue: string = 'FR';

    langueSubject = new Subject<string>();

    // change la langue de l'application
    changeLangue(langue) {
        console.log(langue);
        this.langue = langue;
        this.emitLangue();
    }

    // émet dans toute l'appli la langue de l'application
    emitLangue() {
        this.langueSubject.next(this.langue);
    }
    
}
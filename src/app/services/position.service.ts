import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class PositionService {
    position: string ='';

    positionSubject = new Subject<string>();

    constructor(private router: Router) {
        this.router.events.subscribe(
            (value) => {
                // console.log(value);
                if(value["url"] !== undefined) {
                    this.position = value["url"];
                    this.emitPosition();
                }
            }
        );
        
    }

    emitPosition() {
        this.positionSubject.next(this.position);
    }

}
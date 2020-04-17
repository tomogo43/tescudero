import { Subject } from 'rxjs';

export class SidenavService {
    // sidenav ouverte ?
    opened = false;

    // subject sidenav
    openSubject = new Subject<boolean>();

    // emet dans toute l'appli la valeur de opened
    emitOpened() {
        this.openSubject.next(this.opened);
    }
}
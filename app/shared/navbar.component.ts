import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {
    constructor(private _router: Router) {
    }

    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    ngOnInit() {
    }

}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Message } from '../message';

@Injectable()
export class WoodService {

    myWoodSize = 1;

    constructor() {
    }

    grow() {
        this.myWoodSize++;
    }

    shrink() {
        if (this.myWoodSize > 1) {
            this.myWoodSize--;
        }
    }
}

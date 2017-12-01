import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {

  constructor() { }

}

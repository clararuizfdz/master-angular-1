import { Injectable } from '@angular/core';
import { MemberEntity } from '../model/memberEntity';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  url = environment.apiUrl;
  members: MemberEntity[] = null;
  constructor() { }

  getAll(): Promise<MemberEntity[]>  {

    if (this.members) {
      return Promise.resolve(this.members);
    } else {
      return fetch(this.url)
        .then((response) => response.json())
        .then( json => { this.members = json; return json; });
    }
  }
}

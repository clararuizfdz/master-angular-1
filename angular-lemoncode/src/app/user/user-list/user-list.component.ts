import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model/memberEntity';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  members: MemberEntity[] = [];

  constructor() {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
    .then((response) => response.json())
    .then((json) => this.members = json);
   }

  ngOnInit(): void {
  }

}

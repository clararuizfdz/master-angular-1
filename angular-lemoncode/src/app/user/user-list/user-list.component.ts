import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model/memberEntity';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  members: MemberEntity[] = [];
  newMember: MemberEntity;
  searchValue: string = '';

  constructor() {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => this.members = json);

    this.newMember = {
      id: '',
      login: '',
      avatar_url: ''
    };

  }

  ngOnInit(): void {
  }

  add() {
    this.members.push(this.newMember);

    this.newMember = {
      id: '',
      login: '',
      avatar_url: ''
    };
  }

}

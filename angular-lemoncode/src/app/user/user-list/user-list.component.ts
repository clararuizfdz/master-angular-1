import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model/memberEntity';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  members: MemberEntity[] = [];
  newMember: MemberEntity;
  searchValue: string = '';

  constructor(membersService: MembersService) {

    membersService.getAll().then(
      json => this.members = json
    );
    
    this.newMember = {
      id: '',
      login: '',
      avatar_url: ''
    };

  }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.newMember.avatar_url = reader.result as string;
    };
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

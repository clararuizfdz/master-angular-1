import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model/memberEntity';
import { MembersService } from '../../services/members.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  members: MemberEntity[] = [];
  newMember: MemberEntity;
  searchValue: string = '';
  editForm: FormGroup;
  selectedMember: MemberEntity;

  constructor(membersService: MembersService, private fb: FormBuilder) {

    membersService.getAll().then(
      json => this.members = json
    );
    
    this.newMember = {
      id: '',
      login: '',
      avatar_url: ''
    };

    this.createEditForm();

    //Observables: método subscribe
    this.editForm.valueChanges.subscribe(
      value => console.log(value)
    );
    this.editForm.get('login').valueChanges.subscribe(
      value => console.log(value)
    );

  }

  ngOnInit(): void {
  }

  select(member: MemberEntity){
    this.selectedMember = member;
    this.editForm.patchValue(this.selectedMember);

    // this.editForm.get('login').setValue('abc');
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

  createEditForm(){
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', [Validators.required, Validators.minLength(6)]],
      avatar_url: ''
    });
  }

  handleEditFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.editForm.get('avatar_url').setValue(reader.result);
    };
  }

  save(){
    if(this.editForm.valid){
      this.members = [...this.members];
      const member = this.editForm.value;
      const index = this.members.findIndex(item => item.id === member.id);
      this.members.splice(index, 1, member);
    }
  }

}

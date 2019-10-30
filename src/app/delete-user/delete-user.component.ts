import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { user } from '../model/userProperties';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  @Input() currentUser : user;
  @Output() deleteUserFromList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteUser() {
    this.deleteUserFromList.emit(this.currentUser);
  }

}

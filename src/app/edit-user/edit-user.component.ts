import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { user } from '../model/userProperties';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() currentUser :user;
  @Output() editUser = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  userEdited() {
    this.editUser.emit(this.currentUser);
  }

}

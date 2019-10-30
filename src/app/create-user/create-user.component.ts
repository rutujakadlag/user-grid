import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { user } from '../model/userProperties';
import { Observable} from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  showForm:Boolean = false;
  showUsersList:Boolean = false;
  @Input() currentUser : user;
  @Output() newUserAdded = new EventEmitter();
  @Output() cancelButtonClicked = new EventEmitter();

  constructor(private userService:UsersService) { }

  ngOnInit() {

  }

  showFormView() {  
     this.showForm = true;
     this.showUsersList = false;
  }

  onSubmitForm(currentUser:user) {
    // this.userService.addUser(currentUser);
    this.newUserAdded.emit(currentUser);
  }

  onCancelForm () {
     this.cancelButtonClicked.emit();
  }


}

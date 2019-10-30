import { Component, OnInit } from '@angular/core';
import {user} from '../model/userProperties';
import { UsersService } from '../users.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  usersList : any  [] = [];
  user : user = 
    {'firstName' : '',
    'lastName' : '',
    'emailAddress' : '',
    'gender' : '',
    'location' : []
    };
  showUsersList : Boolean = true;

  constructor(private userService:UsersService) { 
  }

  ngOnInit() {
   
    this.usersList = [
      {
        "firstName": "Monica", 
        "lastName": "Geller", 
        "emailAddress" : "monica.geller@gmail.com", 
        "gender" : "Female", 
        "location" : ["NewYork", "Europe"] 
      },
      {
        "firstName": "Rachel", 
        "lastName": "Green", 
        "emailAddress" : "rachel.green@gmail.com", 
        "gender" : "Female", 
        "location" : ["NewYork", "Europe"] 
      },
      {
        "firstName": "Chandler", 
        "lastName": "Bing", 
        "emailAddress" : "chandler.bing@gmail.com", 
        "gender" : "Male", 
        "location" : ["NewYork", "Europe"] 
      },
      {
        "firstName": "Joey", 
        "lastName": "Tribbiani", 
        "emailAddress" : "joey.trib@gmail.com", 
        "gender" : "Male", 
        "location" : ["NewYork", "Europe"] 
      },
      {
        "firstName": "Phoebe", 
        "lastName": "Buffay", 
        "emailAddress" : "phoebe.buffay@gmail.com", 
        "gender" : "Female", 
        "location" : ["NewYork", "Europe"] 
      },
      {
        "firstName": "Ross", 
        "lastName": "Geller", 
        "emailAddress" : "ross.geller@gmail.com", 
        "gender" : "Male", 
        "location" : ["NewYork", "Europe"] 
      }
   ]
   
   
  }   
  
  showFormView (){
    this.user = {'firstName' : '',
    'lastName' : '',
    'emailAddress' : '',
    'gender' : '',
    'location' : []
    };
    this.showUsersList = false;
  }

  addNewUserToList (newUser :user) {
     console.log(newUser);
     this.usersList.push(newUser);
     this.showUsersList = true;
  }

  showUsersListToUser() {
    this.showUsersList = true;
  }

  deleteUsersFromList(user) {
    this.removeElementFromArray(user);
  }

  editUserFromList(user :user) {
    this.removeElementFromArray(user);
    this.user = user;
    this.showUsersList = false;
  }

  removeElementFromArray (user :user) {
    var userList = _.cloneDeep(this.usersList);
    var tempList = _.remove(userList, (item) =>  {
     return item.firstName ==  user.firstName;
    });
    this.usersList = _.cloneDeep(userList);
  }
}
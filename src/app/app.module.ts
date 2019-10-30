import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';


const appRoutes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  { path: 'edit-user',      component: EditUserComponent },
  { path: 'delete-user', component: DeleteUserComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    EditUserComponent,
    DeleteUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { 

 

}

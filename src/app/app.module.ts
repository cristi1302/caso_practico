import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login.component';


  
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ListTasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    MatDatepickerModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


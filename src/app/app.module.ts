import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatIconModule} from '@angular/material/icon';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { GeneralInfoComponent } from './components/general-info/general-info.component';
import { QuestionsComponent } from './components/questions/questions.component';
import {MatCardModule} from '@angular/material/card';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { GoogleFormComponent } from './components/google-form/google-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    GeneralInfoComponent,
    QuestionsComponent,
    CountdownComponent,
    GoogleFormComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

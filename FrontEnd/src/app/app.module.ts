import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DragDropDirective } from './directives/drag-drop.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CheckService } from './shared/services/check.service';
import { MatTableModule } from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatExpansionModule} from '@angular/material/expansion'; 


import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    DragDropDirective,
    FileUploadComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    TextFieldModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [
    CheckService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

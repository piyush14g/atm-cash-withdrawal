import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtmFormComponent } from './components/atm-form/atm-form.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmFormComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

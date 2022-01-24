import { NgModule } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { PersonagensComponent } from './personagens/personagens.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

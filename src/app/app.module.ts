/*
 * @Author: your name
 * @Date: 2021-07-06 14:26:53
 * @LastEditTime: 2021-07-06 15:33:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angular\my-app\src\app\app.module.ts
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

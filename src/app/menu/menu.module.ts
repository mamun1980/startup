import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';
import {MaterialModule} from '../material/material.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TopNavMenuComponent, LeftMenuComponent],
  exports: [
    TopNavMenuComponent,
    LeftMenuComponent
  ]
})
export class MenuModule { }

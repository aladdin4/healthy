import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MaterialModule, ReactiveFormsModule, CommonModule, AccordionModule.forRoot(), FormsModule, RouterModule ],
  exports: [NavbarComponent]
})
export class SharedModule { }

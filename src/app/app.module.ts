import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.modules';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MaterialModule, SharedModule, CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

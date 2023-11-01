import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FullComponent } from './modules/layouts/full/full.component';
import { BlankComponent } from './modules/layouts/blank/blank.component';
import { MyfooterComponent } from './modules/shares/myfooter/myfooter.component';
import { MysidebarComponent } from './modules/shares/mysidebar/mysidebar.component';
import { MynavbarComponent } from './modules/shares/mynavbar/mynavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    MyfooterComponent,
    MysidebarComponent,
    MynavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

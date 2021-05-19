import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSocialLinksModule } from 'ng-social-links';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgSocialLinksModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BodyCardComponent } from './body-card/body-card.component';
import { EtablissementComponent } from './etablissement/etablissement.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    BodyComponent,
    BodyCardComponent,
    EtablissementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

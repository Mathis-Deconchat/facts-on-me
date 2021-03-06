import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FactComponent } from './fact/fact.component';
import { FactsDetailsComponent } from './facts-details/facts-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FactAdderComponent } from './fact-adder/fact-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    FactComponent,
    FactsDetailsComponent,
    FactAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

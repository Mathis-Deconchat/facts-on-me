import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FactComponent } from './fact/fact.component';
import { FactsDetailsComponent } from './facts-details/facts-details.component';

import { FactAdderComponent } from './fact-adder/fact-adder.component';
import { FactNavComponent } from './fact-nav/fact-nav.component';
import { FactAllComponent } from './fact-all/fact-all.component';

@NgModule({
  declarations: [
    AppComponent,
    FactComponent,
    FactsDetailsComponent,
    FactAdderComponent,
    FactNavComponent,
    FactAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeChallangeComponent } from './code-challange/code-challange.component';
import { ChallangeTitleComponent } from './code-challange/challange-title/challange-title.component';
import { ChallangeSelectorsComponent } from './code-challange/challange-selectors/challange-selectors.component';
import { ChallangeSubSelectorsComponent } from './code-challange/challange-selectors/challange-sub-selectors/challange-sub-selectors.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeChallangeComponent,
    ChallangeTitleComponent,
    ChallangeSelectorsComponent,
    ChallangeSubSelectorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//要使用 [(ngModel)] 這個雙向綁定的 Directive 的話，必須要引入 Angular 的 FormsModule 才能正常使用
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

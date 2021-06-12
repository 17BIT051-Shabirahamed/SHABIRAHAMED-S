import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Service } from './service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,HttpClientModule,RouterModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchNamePipe } from './home/search-name.pipe';
import { MobilesComponent } from './mobiles/mobiles.component';
import { HeaderComponent } from './header/header.component';
import { ElectronicsComponent } from './electronics/electronics.component';
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,SearchNamePipe, MobilesComponent, HeaderComponent, ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [ { provide: 'httpOptions', useValue: { httpVersion: '1.1' } },],
  bootstrap: [AppComponent]
})
export class AppModule { }

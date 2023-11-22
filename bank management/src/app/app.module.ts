import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './component/add/add.component';
import { ViewComponent } from './component/view/view.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './component/edit/edit.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { WatchComponent } from './component/watch/watch.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    SpinnerComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ServerComponent } from './server/server.component';
import {AppComponent} from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ServerComponent,AppComponent
  ],
  exports: [
    ServerComponent,AppComponent
  ]
})

export class AppModule { }

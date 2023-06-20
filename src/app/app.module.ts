import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// new firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAkTEzduFGqQb9IcXlEZS59F0XKMOyyLEY",
      authDomain: "ioniclab10.firebaseapp.com",
      projectId: "ioniclab10",
      storageBucket: "ioniclab10.appspot.com",
      messagingSenderId: "900725268677",
      appId: "1:900725268677:web:a663392ec8ce58a31f90ac",
      measurementId: "G-QB2FP0C843"
    }),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}

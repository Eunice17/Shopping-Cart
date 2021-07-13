import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsComponent } from './view/products/products.component';
import { CartComponent } from './view/cart/cart.component';
import { LoginComponent } from './view/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { ClientComponent } from './view/client/client.component'
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { SaldoDisponibleComponent } from './components/saldo-disponible/saldo-disponible.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductCardComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    ModalComponent,
    ClientComponent,
    ClientFormComponent,
    ClientTableComponent,
    SaldoDisponibleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

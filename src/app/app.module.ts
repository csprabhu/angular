import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';

@NgModule({

    imports:[
        BrowserModule
    ],
    declarations:[AppComponent, ProductListComponent],
    //bootstrap:[AppComponent]
    bootstrap:[ProductListComponent]

})
export class AppModule{

}
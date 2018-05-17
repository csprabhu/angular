import{Component, NgModule} from '@angular/core';

@Component({
    selector:'app-root',
    templateUrl:'./app.Component.html',
    styleUrls:['./app.Component.css']
})

export class AppComponent{
    title={
        primary:"Hi",
        sec:'Hello'
    }
    //small expriment
    constructor(){
        setTimeout(()=>this.title.primary="Good",5000);
    }
}
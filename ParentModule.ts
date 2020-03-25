import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ParentComponent} from './parent';
import {ChildComponent} from './child/child1';

@NgModule({
    declarations: [
        ParentComponent,ChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ParentComponent,ChildComponent]
})

export class ParentModule{


}
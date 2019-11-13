//modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule, MatFormFieldControl} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";

//components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AmazingTimePickerModule} from "amazing-time-picker";
import {FormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Tabs} from './directives/tabs';
import {Tab} from './directives/tab';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        Tabs,
        Tab
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AmazingTimePickerModule,
        BrowserAnimationsModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatStepperModule,
        ReactiveFormsModule,
    ],
    providers: [
        // {provide: MAT_DATE_LOCALE, useValue: 'ar-SA'},
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

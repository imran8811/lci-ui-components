//modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {AmazingTimePickerModule} from "amazing-time-picker";
import {FormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
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
        MatRadioModule
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'ar-SA'},
        // {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

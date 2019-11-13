import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tabs} from "../../directives/tabs";
// import {Tab} from "../../directives/tabs";
import {IDropdownSettings} from "ng-multiselect-dropdown";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['../../../assets/css/style.css']
})

export class HomeComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(private _formBuilder: FormBuilder){}
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    ngOnInit() {
        //stepper forms
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.dropdownList = [
            { item_id: 1, item_text: 'Islamabad' },
            { item_id: 2, item_text: 'Karachi' },
            { item_id: 3, item_text: 'Lahore' },
            { item_id: 4, item_text: 'Faisalabad' },
            { item_id: 5, item_text: 'Multan' }
        ];
        this.selectedItems = [
            { item_id: 3, item_text: 'Lahore' },
            { item_id: 4, item_text: 'Kashmir' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    //data tables
    // rows = [
    //     { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    //     { name: 'Dany', gender: 'Male', company: 'KFC' },
    //     { name: 'Molly', gender: 'Female', company: 'Burger King' },
    // ];
    // columns = [
    //     { prop: 'name' },
    //     { name: 'Gender' },
    //     { name: 'Company' }
    // ];
}

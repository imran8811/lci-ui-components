import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tabs} from "../../directives/tabs";
// import {Tab} from "../../directives/tabs";
import {IDropdownSettings} from "ng-multiselect-dropdown";

@Component({
    selector: 'Dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/css/style.css']
})

export class DashboardComponent implements OnInit {
    CountryDropDownList = [];
    CompanyDropdownList = [];
    UserGroupDropdownList = []
    selectedCountry = [];
    selectedCompany = [];
    selectedUserGroup = [];
    CountryDropdownSettings = {};
    UserGroupDropdownSettings = {};
    CompanyDropdownSettings = {};

    constructor(){}

    ngOnInit(): void {
        this.CountryDropDownList = [
            { item_id: 1, item_text: 'Pakistan' },
            { item_id: 2, item_text: 'USA' },
            { item_id: 3, item_text: 'UK' },
            { item_id: 4, item_text: 'KSA' },
            { item_id: 5, item_text: 'UAE' }
        ];
        this.CompanyDropdownList = [
            { item_id: 1, item_text: 'BTA' },
            { item_id: 2, item_text: 'LCI' },
            { item_id: 3, item_text: 'CareerNet' },
            { item_id: 4, item_text: 'Com1' },
            { item_id: 5, item_text: 'Com2' }
        ];
        this.UserGroupDropdownList = [
            { item_id: 1, item_text: 'Group1' },
            { item_id: 2, item_text: 'Group2' },
            { item_id: 3, item_text: 'Group3' },
            { item_id: 4, item_text: 'Group4' },
            { item_id: 5, item_text: 'Group5' }
        ];

        this.selectedCountry = [
            { item_id: 1, item_text: 'Pakistan' }
        ];
        this.CountryDropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.UserGroupDropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.CompanyDropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };

    }
}

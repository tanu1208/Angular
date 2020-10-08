import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  
  
  propertyTypes: Array<string> = ['House', 'Apartment', "Duplex"]
  furnishTypes: Array<string> = ['Fully', 'Semi', "Unfurnished"]

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    FType: null,
    PType: null,
    BHK: null,
    GrossArea: null,
    City: null,
    RTM: null
  };
  
  constructor(private router: Router) { }

  ngOnInit() {
    // this.addPropertyForm.controls['Name'].setValue('Default Value');

    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('');
    });

  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form Submitted');
    console.log('SellRent=' +  this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
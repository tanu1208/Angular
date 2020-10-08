import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  nextClicked: boolean;
  
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
  
  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1' , Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required]
      }),
      
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        Deposit: [null],
        Maintenance: [null],
        GrossArea: [null, Validators.required],
        NetArea: [null]
      }),

      AddressInfo: this.fb.group({
        Address: [null, Validators.required],
        ZipCode: [null, Validators.required],
        City: [null, Validators.required],
        TotalFloor: [null]
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
    });
  }

  // ------------
  // Get Methods for FormGroups
  // ------------

  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls.PriceInfo as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls.AddressInfo as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls.OtherInfo as FormGroup;
  }

  // ------------
  // Get Methods for BasicInfo.controls
  // ------------

  get SellRent() {
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls.BHK as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls.PType as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls.FType as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls.Name as FormControl;
  }

  // ------------
  // Get Methods for PriceInfo.controls
  // ------------

  get Price() {
    return this.PriceInfo.controls.Price as FormControl;
  }

  get Deposit() {
    return this.PriceInfo.controls.Deposit as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls.Maintenance as FormControl;
  }

  get GrossArea() {
    return this.PriceInfo.controls.GrossArea as FormControl;
  }

  get NetArea() {
    return this.PriceInfo.controls.NetArea as FormControl;
  }

  // ------------
  // Get Methods for AddressInfo.controls
  // ------------

  get Address() {
    return this.AddressInfo.controls.Address as FormControl;
  }

  get ZipCode() {
    return this.AddressInfo.controls.ZipCode as FormControl;
  
  }
  
  get City() {
    return this.AddressInfo.controls.City as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls.TotalFloor as FormControl;
  }

  // ------------
  // Get Methods for OtherInfo.controls
  // ------------

  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls.PossessionOn as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls.AOP as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls.Gated as FormControl;
  }
  
  get MainEntrance() {
    return this.OtherInfo.controls.MainEntrance as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls.Description as FormControl;
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked = true;
    console.log('Congrats, form Submitted');
    console.log('SellRent=' +  this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

 /*  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    return true;
  } */

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if(IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    }
  }

  

}
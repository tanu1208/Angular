import { Component, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { AddPropertyComponent } from '../add-property/add-property.component';

@Component({
  selector: 'app-property-card',
  //template: `<h1>Hi I am a card</h1>`,
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent {
  @Input() property : IPropertyBase;
  @Input() hideIcons: boolean;

  constructor(private adprop:AddPropertyComponent) { }

  get SellRentInfo() {
    return this.adprop.SellRent.value;
  }
}

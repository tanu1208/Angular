import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  BHK: number;
  FType: string;
  Price: number;
  GrossArea: number;
  Netarea?: number;
  Address: string;
  ZipCode: number;
  City: string;
  TotalFloor?: number;
  RTM: number;
  AOP?: number;
  MainEntrance?: string;
  Deposit?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image?: string;
  Description?: string;
  PostedOn: string;
  PostedBy: number;
}
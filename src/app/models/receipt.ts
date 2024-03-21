import {Provider} from "./provider";
import {Material} from "./material";

export interface receiptForm {

      receiptDate:Date;
      email:string;
      quantity:number;
      providerNumber:string;
      expirationDate:Date;
      temperature: number;
      frozen:boolean;
      frozenTemp:number;
      frozenDate:Date;
      thawedDate:Date;
      frozenExpirationDate:Date;
      frozenDays: number;
      labelling:boolean;
      labelComment:string;
      packaging:boolean;
      packagingComment:string;
      hygiene:boolean;
      hygieneComment:string;
      comment:string;
      providerId:number;


}


export interface  Receipt {
  id:number
  receiptDate:Date;
  quantity:number;
  email:string;
  providerNumber:string;
  expirationDate:Date;
  temperature: number;
  frozen:boolean;
  frozenTemp:number;
  frozenDate:Date;
  thawedDate:Date;
  frozenExpirationDate:Date;
  frozenDays: number;
  labelling:boolean;
  labelComment:string;
  packaging:boolean;
  packagingComment:string;
  hygiene:boolean;
  hygieneComment:string;
  comment:string;
  providerId:number;
  materialId:number;
  imageData:Uint8Array;
  provider: Provider;
  material: Material;
}

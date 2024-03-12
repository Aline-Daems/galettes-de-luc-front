export interface receiptForm {

      dateReceipt:Date;
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

import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController } from 'ionic-angular';  
import { SignUpPage } from '../signup/signup';  
import { FinishPage } from './finish';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
  styleUrls: ['/pages/scan/scan.scss']
})
export class ScanPage {

  constructor(public navCtrl: NavController) {

  }
      goBack(){
		  this.navCtrl.pop(SignUpPage);
	  }    
	  
	  finish(){
		  this.navCtrl.push(FinishPage);
	  }
      
      scanLicense(){
		  BarcodeScanner.scan().then((barcodeData) => {
 // Success! Barcode data is here  
          alert(JSON.stringify(barcodeData));
}, (err) => {
    // An error occurred
});
		  
	  }	  
	  
}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';  
import { ScanPage } from '../scan/scan';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['/pages/signup/signup.scss']
})
export class SignUpPage {

  constructor(public navCtrl: NavController) {

  }
      goBack(){
		  this.navCtrl.pop(TabsPage);
	  }  
	  
	  goToScan(){
		  this.navCtrl.push(ScanPage);
	  }
}

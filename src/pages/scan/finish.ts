import { Component } from '@angular/core';
import { ScanPage } from './scan';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-finish',
	templateUrl: 'finish.html',
	styleUrls: ['/pages/scan/scan.scss']
})  

export class FinishPage {
	constructor(public navCtrl: NavController){
		
	}  
	
	goBack(){
		this.navCtrl.pop(ScanPage);
	}
}
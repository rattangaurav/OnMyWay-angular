import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';  
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html',
  styleUrls: ['/pages/tabs/tabs.scss']
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(public navCtrl: NavController) {

  }  
  
  goToSignUp(){
	  this.navCtrl.push(SignUpPage);
  }
  
}

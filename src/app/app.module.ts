import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs'; 
import { SignUpPage } from '../pages/signup/signup';  
import { ScanPage } from '../pages/scan/scan';  
import { FinishPage } from '../pages/scan/finish';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	SignUpPage,
	ScanPage,
	FinishPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	SignUpPage,
	ScanPage,
	FinishPage
  ],
  providers: []
})
export class AppModule {}

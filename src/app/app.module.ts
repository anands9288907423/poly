import { AnnouncementService} from './services/announcement.service';
import { AuthService } from './services/auth.service';
import { ReminderService } from './services/reminder.service';
import { ReminderComponent } from './reminder/reminder.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FooterComponent } from './footer/footer.component';
import { BottomComponent } from './bottom/bottom.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { InfocollectComponent } from './infocollect/infocollect.component';
import { UserinfoService } from './services/userinfo.service';
import { MessageComponent } from './message/message.component';
import { PdfsComponent } from './pdfs/pdfs.component';
import { PdfsService } from './services/pdfs.service';
import { ImguploadService } from './services/imgupload.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const appRoutes: Routes = [{
  path:'login',
  component : LoginComponent
},{
  path :'profile',
  component : ProfileinfoComponent
},{
  path :'home',
  component : BottomComponent
},
{
  path : 'review/:uid',
  component : InfocollectComponent
},
{
  path : 'message',
  component : MessageComponent
},
{
  path : 'pdfs',
  component : PdfsComponent
}
,{
  path:'',
  component : BottomComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    BottomComponent,
    FooterComponent,
    NavigationbarComponent,
    ReminderComponent,
    LoginComponent,
    ProfileinfoComponent,
    LoadingComponent,
    InfocollectComponent,
    MessageComponent,
    PdfsComponent,

  ],
  imports: [
    
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
       // <-- debugging purposes only
    ),
    AngularFireStorageModule,
    NgbModule.forRoot()
  ],
  providers: [
    ReminderService,
    AuthService,
    AnnouncementService,
    UserinfoService,
    PdfsService,
    ImguploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

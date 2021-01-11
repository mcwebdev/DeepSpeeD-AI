import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxTimelineModule } from 'ngx-timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OktaAuthModule } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageClassifierComponent } from './image-classifier/image-classifier.component';
import { D3Component } from './d3/d3.component';
import { WebcamClassifierComponent } from './webcam-classifier/webcam-classifier.component';
import { SpeechCommandComponent } from './speech-commands/speech-ai.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { LoadingGuard } from './loader/loading.guard';
import { SimpleNotificationsModule } from 'angular2-notifications';
import * as PlotlyJS from 'node_modules/plotly.js';
import { PlotlyViaCDNModule } from './plotly-via-cdn/plotly-via-cdn.module';
import { AngularDraggableModule } from 'angular2-draggable';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { AngularFireModule } from 'angularfire2';
//import { ParticlesModule } from 'angular-particle';
PlotlyViaCDNModule.plotlyVersion = '1.49.4';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoaderComponent,
    ImageClassifierComponent,
    WebcamClassifierComponent,
    SentimentAnalysisComponent,
    SpeechCommandComponent,
    BlockchainComponent,
    D3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxTimelineModule,
    FontAwesomeModule,
    PlotlyViaCDNModule,
    AngularDraggableModule,
    InputTextModule,
    SliderModule,
    BsDatepickerModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    ModalModule.forRoot(),
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule,
   // ParticlesModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-272649.okta.com/oauth2/default',
      redirectUri: 'https://krosomnikhan.com/implicit/callback',
      clientId: '0oa23zanmjWeZ2lEw357'
    })
  ],
  providers: [LoadingGuard, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

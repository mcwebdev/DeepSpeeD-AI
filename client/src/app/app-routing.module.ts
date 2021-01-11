import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3Component } from './d3/d3.component';
import { WebcamClassifierComponent } from './webcam-classifier/webcam-classifier.component';
import { ImageClassifierComponent } from './image-classifier/image-classifier.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { SpeechCommandComponent } from './speech-commands/speech-ai.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { HomeComponent } from './home/home.component';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { LoadingGuard } from './loader/loading.guard';
// https://medium.com/ngconf/animating-angular-route-transitions-ef02b871cc30?

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [LoadingGuard],
        data: { animationState: 'One' }
      },
      //Loading Guard: Logged in users only...
      //{ 
      //  path: '',
      //  component: HomeComponent,
      //  canActivate: [LoadingGuard],
      //  data: { animationState: 'One' }
      //},
      {
        path: 'd3',
        component: D3Component,
        data: { animationState: 'One' }
      },
      {
        path: 'implicit/callback',
        component: OktaCallbackComponent,
        data: { animationState: 'Three' }
      },
      {
        path: 'upload',
        component: ImageClassifierComponent,
        canActivate: [LoadingGuard],
        data: { animationState: 'Two' }
      },
      {
        path: 'speech-commands',
        component: SpeechCommandComponent,
        canActivate: [LoadingGuard],
        data: { animationState: 'One' }
      },
      {
        path: 'webcam',
        component: WebcamClassifierComponent,
        canActivate: [LoadingGuard],
        data: { animationState: 'Two' }
      },
      {
        path: 'sentiment',
        component: SentimentAnalysisComponent,
        canActivate: [LoadingGuard],
        data: { animationState: 'Three' }
      },
      {
        path: 'blockchain',
        component: BlockchainComponent,
        canActivate: [LoadingGuard],
        data: { animationState: 'One' }
      },
      {
        path: '**',
        redirectTo: 'one'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

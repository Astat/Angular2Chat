import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChatHandlerService } from './chat-handler.service'
import { ChatCommunicationService } from './chat-communication.service'

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

import { ConnectedGuard } from './connected.guard';
import { MessageInterceptorComponent } from './message-interceptor/message-interceptor.component';
import { PluginTestComponent } from './plugin-test/plugin-test.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { Plugin1Component } from './plugin-1/plugin-1.component';
import { Plugin2Component } from './plugin-2/plugin-2.component';
import { Plugin3Component } from './plugin-3/plugin-3.component';
import { Plugin4Component } from './plugin-4/plugin-4.component';
import { Plugin5Component } from './plugin-5/plugin-5.component';
import { Plugin6Component } from './plugin-6/plugin-6.component';
import { Plugin7Component } from './plugin-7/plugin-7.component';
import { Plugin8Component } from './plugin-8/plugin-8.component';

import { WoodService } from './plugin-6/wood.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ChatViewComponent,
    LoginViewComponent,
    MessageInterceptorComponent,
    PluginTestComponent,
    MessageViewComponent,
    Plugin1Component,
    Plugin2Component,
    Plugin3Component,
    Plugin4Component,
    Plugin5Component,
    Plugin6Component,
    Plugin7Component,
    Plugin8Component
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ChatHandlerService,
    ChatCommunicationService,
    ConnectedGuard,
    WoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

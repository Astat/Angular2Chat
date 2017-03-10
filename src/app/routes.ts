import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { ChatViewComponent } from './chat-view/chat-view.component'

export const routes: Routes = [
    { path: '', component: ChatViewComponent },
    { path: 'test', component: ChatViewComponent },
    {
        path: 'index',
        redirectTo: '',
        pathMatch: 'full'
    }
];

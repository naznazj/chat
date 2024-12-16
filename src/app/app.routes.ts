import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ConversationsComponent } from './components/conversations/conversations.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'chat', component: ConversationsComponent, canActivate: [authGuard] },
    { path: 'Login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

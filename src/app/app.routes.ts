import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ConversationComponent } from './components/conversations/conversations.component';
import { UsersComponent } from './components/users/users.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { UserInvitationComponent } from './components/user-invitation/user-invitation.component';
import { ChatComponent } from './agents/chat/chat.component';
import { AgentDashboardComponent } from './agents/agent-dashboard/agent-dashboard.component';
import { AgentNotificationsComponent } from './agents/agent-notifications/agent-notifications.component';
import { AgentSettingsComponent } from './agents/agent-settings/agent-settings.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'chat', component: ConversationComponent, canActivate: [authGuard] },
    { path: 'users', component: UsersComponent, canActivate: [authGuard] },
    { path: 'notifications', component: NotificationsComponent, canActivate: [authGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'usermanage', component: UserManageComponent, canActivate: [authGuard] },
    { path: 'user-invite', component: UserInvitationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'achat', component: ChatComponent },
    { path: 'adashboard', component: AgentDashboardComponent },
    { path: 'anotifications', component: AgentNotificationsComponent  },
    { path: 'asettings', component: AgentSettingsComponent},
    { path: '**', redirectTo: '' }
];

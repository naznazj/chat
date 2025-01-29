import { Component } from '@angular/core';
import { aSidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-agent-notifications',
  standalone: true,
  imports: [aSidebarComponent],
  templateUrl: './agent-notifications.component.html',
  styleUrl: './agent-notifications.component.css'
})
export class AgentNotificationsComponent {

}

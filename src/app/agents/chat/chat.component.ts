import { Component } from '@angular/core';
import { ConversationComponent } from "../../components/conversations/conversations.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ConversationComponent, SidebarComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

}

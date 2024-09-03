import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  ngOnInit() {
      this.socketService.onMessage((message) => {
          console.log('New message:', message);
      });

      // Send a test message
      this.socketService.sendMessage('Hello from Angular!');
  }
}

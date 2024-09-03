import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {
    private socket: Socket;

    constructor() {
        this.socket = io('http://localhost:3000'); // Replace with your server URL
    }

    // Example method to send a message
    sendMessage(message: string) {
        this.socket.emit('message', message);
    }

    // Example method to listen for messages
    onMessage(callback: (message: string) => void) {
        this.socket.on('message', callback);
    }
}

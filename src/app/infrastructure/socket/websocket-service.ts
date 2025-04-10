import { Injectable } from '@angular/core';

export interface Message {
  Action: string;
}

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private socket!: WebSocket;

  constructor() {}

  connect(): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket('ws://localhost:3000/ws');

      this.socket.onopen = () => {
        console.log('Conectado al servidor WebSocket');
        resolve(this.socket);
      };

      this.socket.onerror = (error) => {
        console.error('Error de conexión:', error);
        reject(error);
      };
    });
  }

  getSocket(): WebSocket {
    return this.socket;
  }
}

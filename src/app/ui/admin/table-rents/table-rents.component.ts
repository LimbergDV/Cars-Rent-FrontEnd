import { Component, OnInit } from '@angular/core';
import { Message, WebSocketService } from '../../../infrastructure/socket/websocket-service';

@Component({
  selector: 'app-table-rents',
  templateUrl: './table-rents.component.html',
  styleUrl: './table-rents.component.css'
})
export class TableRentsComponent implements OnInit{
  message!: string;

  constructor(private wsService: WebSocketService) {}

  async ngOnInit() {
    try {
      const socket = await this.wsService.connect();
      socket.onmessage = (event) => this.handleMessage(event);
    } catch (error) {
      console.error('Error al conectar:', error);
    }
  }

  private handleMessage(event: MessageEvent) {
    try {
      const data: Message = JSON.parse(event.data);
      this.message = data.Action;
      this.processMessage();
    } catch (error) {
      console.error('Error al parsear mensaje:', error);
    }
  }

  processMessage() {
    console.log(this.message);

    if (this.message == 'rent') {
      alert('El proceso de préstamo se ha llevado a cabo con éxito');
      window.location.reload();
    } else if (this.message == 'return') {
      alert('El proceso de devolución se ha llevado a cabo con éxito');
      window.location.reload();
    }
  }
}

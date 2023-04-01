
import { SubscribeMessage, MessageBody, ConnectedSocket, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import { interval, map, take } from 'rxjs';
import { UseGuards} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer() server;

    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string,  @ConnectedSocket() client) {
        console.log('connected client: ', client.client.id)
        const response = new GatewayData().getData();

        return response.pipe(
            take(50),
            map(data => ({ event: 'data', data })),
        );
    }
}

class GatewayData {
    getData() {
        return interval(1000);
    }
}
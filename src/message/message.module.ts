import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  controllers: [MessageController],
  providers: [MessageService, EventsGateway]
})
export class MessageModule {}

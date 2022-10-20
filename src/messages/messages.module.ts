import { Module } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessagesService } from './message.service';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
  providers: [MessageRepository, MessagesService]
})
export class MessagesModule {}

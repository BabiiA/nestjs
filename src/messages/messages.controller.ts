import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './message.service';

@Controller('messages')
export class MessagesController {

    constructor(public messageService: MessagesService) {
        this.messageService = messageService;
    }

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        this.messageService.create(body.content);
    }
    
    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        console.log(id);
        const message = await this.messageService.findOne(id);
        if (!message) {
            throw new NotFoundException("Message is not found");
        }
        return this.messageService.findOne(id);
    }

}

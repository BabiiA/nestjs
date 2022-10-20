import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./message.repository";

@Injectable()
export class MessagesService {

    constructor(public messageRepo: MessageRepository) {
        this.messageRepo = new MessageRepository();
    }

    async findOne(id: string) {
        return this.messageRepo.findOne(id);
    }

    findAll() {
        return this.messageRepo.findAll();
    }

    create(content: string) {
        return this.messageRepo.create(content);
    }
}
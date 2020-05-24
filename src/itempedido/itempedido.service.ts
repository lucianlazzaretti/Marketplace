import { Injectable } from '@nestjs/common';
import { ItemPedido } from './itempedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItempedidoService {
    
    constructor(
        @InjectRepository(ItemPedido)
        private readonly repository: Repository<ItemPedido>) {
    }

    save(itempedido : ItemPedido) {
        return this.repository.save(itempedido);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }   
}


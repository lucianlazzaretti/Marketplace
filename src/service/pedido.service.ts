import { Injectable } from '@nestjs/common';
import { Pedido } from '../model/pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
    
    constructor(
    @InjectRepository(Pedido)
        private readonly repository: Repository<Pedido>) {
    }

    save(pedido : Pedido) {
        return this.repository.save(pedido);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find({ relations: ["itemPedido"] });
    }

    findById(id: number) {
        return this.repository.findOne(id, { relations: ["itemPedido"] });
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
    
    constructor(
        @InjectRepository(Produto)
        private readonly repository: Repository<Produto>) {
    }

    save(produto : Produto) {
        return this.repository.save(produto);
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

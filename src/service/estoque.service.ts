import { Injectable } from '@nestjs/common';
import { Estoque } from 'src/model/estoque.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class EstoqueService {
    
    constructor(
    @InjectRepository(Estoque)
        private readonly repository: Repository<Estoque>) {
    }

    save(estoque : Estoque) {
        return this.repository.save(estoque);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find({ relations: ["produto"] });
    }

    findById(id: number) {
        return this.repository.findOne(id, { relations: ["produto"] });
    }

    update(id: number, entity: Estoque) {
        if (id !== entity.id) {
            return false;
        }
        this.repository.update(id, entity);
        return true;
    }
}

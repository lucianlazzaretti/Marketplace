import { Injectable, Inject } from '@nestjs/common';
import { Cliente } from '../model/cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ClienteService {
    
    constructor(
        @InjectRepository(Cliente)
        private readonly repository: Repository <Cliente>){
    }

    save(cliente : Cliente ){
        return this.repository.save(cliente);
    }

    delete(id : number){
       return this.repository.delete(id);
    }

    findAll(){
        return this.repository.find();
    }

    findById(id : number){
        return this.repository.findOne(id, { relations: ["pedido"] });
        }
}

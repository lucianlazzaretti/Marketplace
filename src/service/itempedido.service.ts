import { Injectable } from '@nestjs/common';
import { ItemPedido } from '../model/itempedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Estoque } from 'src/model/estoque.entity';
import { Produto } from 'src/model/produto.entity';

@Injectable()
export class ItempedidoService {
    produtoService: any;
    estoqueService: any;
    
    constructor(
        @InjectRepository(ItemPedido)
        private readonly repository: Repository<ItemPedido>) {
    }
    async save(itempedido : ItemPedido) {
        const estoque = new Estoque;
        const produto = new Produto;
        
        const pedidoTemp = this.repository.save(itempedido);
        produto.id = (await pedidoTemp).produtos.id;
  
        const estoqueTemp = this.produtoService.findById(produto.id);
        estoque.id = (await estoqueTemp).estoque.id;
        estoque.quantidadeEstoque = (await estoqueTemp).estoque.quantidadeEstoque - 1;

        const temp = this.estoqueService.update(estoque.id, estoque);
        
        return temp;
    }

    delete(id: number) {
        return this.repository.delete(id);
    }

    findAll() {
        return this.repository.find({ relations: ["produto","pedido"] });
    }

    findById(id: number) {
        return this.repository.findOne(id,{ relations: ["produto","pedido"] });
    }   
}


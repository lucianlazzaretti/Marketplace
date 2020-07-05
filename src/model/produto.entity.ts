import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { ItemPedido } from "src/model/itempedido.entity";
import { Cliente } from "./cliente.entity";


@Entity ("Produtos")
export class Produto{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Nome', type: 'varchar', length: '80'})
    nome: String;

    @Column({name: 'Descrição', type: 'varchar', length: '100'})
    descricao: String;

    @Column({name: 'Preço', type: 'decimal'})
    preco: number;

    @Column({name: 'Data de validade', type: 'date'})
    data: Date;

    @Column({name: 'Unidade de medida', type: 'varchar', length: '100'})
    medida: String;

    @Column({name: 'Código', type: 'varchar', length: '20'})
    codigo: String;

    @Column({name: 'Quantidade estoque', type: 'numeric'})
    estoqueQuantidade:number;

    @ManyToOne(type => Cliente, cliente => cliente.pedido)
    @JoinColumn({name: "Estoque"})
    cliente: Cliente;

    @OneToMany(type => ItemPedido, itemPedido => itemPedido.produtos)
    itemPedido: ItemPedido[]
    estoque: any;

}


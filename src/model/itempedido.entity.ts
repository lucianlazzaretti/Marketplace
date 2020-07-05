import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Pedido } from "src/model/pedido.entity";
import { Produto } from "src/model/produto.entity";

@Entity ("ItensPedidos")
export class ItemPedido{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Quantidade', type: 'int'})
    quantidade: number;

    @Column({name: 'Valor Unitario', type: 'decimal'})
    valorUnitario: number;

    @Column({name: 'Valor total', type: 'decimal'})
    valorTotal:number;

    @ManyToOne(type => Produto, produto => produto.itemPedido)
    @JoinColumn({name: "produto"})
    produtos: Produto;

    @ManyToOne(type => Pedido, pedido => pedido.itemPedido)
    @JoinColumn({name:"pedido"})
    pedidos: Pedido;

}

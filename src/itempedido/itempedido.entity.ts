import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";

@Entity ("OrderItem")
export class ItemPedido{
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Produto)
    @JoinColumn()
    produto: Produto;


    @ManyToOne(type => Pedido, Pedido => Pedido.itemPedido)
    @JoinColumn({name: "OrderId"})
    pedido: Pedido;

    @Column({name: 'Quantity', type: 'int'})
    quantity: number;

    @Column({name: 'Unit Value', type: 'decimal'})
    unitValue: number;

    @Column({name: 'Total Value', type: 'decimal'})
    totalValue:number;


}

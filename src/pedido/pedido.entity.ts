import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Cliente } from "src/cliente/cliente.entity";
import { ItemPedido } from "src/itempedido/itempedido.entity";

@Entity ("Order")
export class Pedido{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Order Number', type: 'varchar', length: '20'})
    orderNumber: String;

    @Column({name: 'Order Date', type: 'date'})
    orderDate: Date;

    @Column({name: 'Total', type: 'decimal'})
    total : number;
    
    @ManyToOne(type => Cliente, cliente => cliente.pedido)
    @JoinColumn({name: "CustomerId"})
    cliente: Cliente;

    @OneToMany(type => ItemPedido, itemPedidos => itemPedidos.pedido)
    itemPedido: Array<ItemPedido>;

}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Cliente } from "src/model/cliente.entity";
import { ItemPedido } from "src/model/itempedido.entity";

@Entity ("Pedidos")
export class Pedido{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Numero pedido', type: 'varchar', length: '20'})
    numeroPedido: String;

    @Column({name: 'Data da ordem', type: 'date'})
    dataOrdem: Date;

    @Column({name: 'Data da entrega', type: 'date'})
    entrega: Date;
    
    @Column({name: 'Transportadora', type: 'varchar'})
    transportadora: string;

    @Column({name: 'Valor unitário', type: 'decimal'})
    valorUnitario: number;

    @Column({name: 'Valor desconto', type: 'decimal'})
    valorDesconto: number;

    @Column({name: 'Valor total', type: 'decimal'})
    valorTotal : number;

    @Column({name: 'Endereço de entrega', type: 'varchar', length: '80'})
    enderecoEntrega: String;

    @ManyToOne(type => Cliente, cliente => cliente.pedido)
    @JoinColumn({name: "Cliente"})
    cliente: Cliente;

    @OneToMany(type => ItemPedido, itemPedidos => itemPedidos.pedidos)
    itemPedido: Array<ItemPedido>;


}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "src/pedido/pedido.entity";

@Entity ("Customer")
export class Cliente{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Name', type: 'varchar', length: '80'})
    name: String;

    @Column({name: 'Cpf', type: 'varchar', length: '14'})
    cpf: String;

    @Column({name: 'Address', type: 'varchar', length: '80'})
    address: String;
    
    @OneToMany(type => Pedido, pedido => pedido.cliente)
    pedido: Array<Pedido>;

}
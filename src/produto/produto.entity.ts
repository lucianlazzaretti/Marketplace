import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemPedido } from "src/itempedido/itempedido.entity";

@Entity ("Product")
export class Produto{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Code', type: 'varchar', length: '20'})
    code: String;

    @Column({name: 'Name', type: 'varchar', length: '80'})
    name: String;

    @Column({name: 'Price', type: 'decimal'})
    price: number;

    @Column({name: 'Stock Quantity', type: 'int'})
    stockQuantity:number;


}


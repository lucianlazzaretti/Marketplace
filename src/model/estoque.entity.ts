import { Produto } from "./produto.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity ("Estoque")
export class Estoque{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Quantidade estoque', type: 'numeric'})
    quantidadeEstoque: number;

    @OneToMany(type => Produto, produto => produto.estoque)
    produto: Produto[];


}







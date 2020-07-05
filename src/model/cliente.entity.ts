import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "src/model/pedido.entity";

@Entity ("clientes")
export class Cliente{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Nome', type: 'varchar', length: '30'})
    nome: String;

    @Column({name: 'Cpf', type: 'varchar', length: '14'})
    cpf: String;

    @Column({name: 'Rg', type: 'varchar', length: '10'})
    rg: String;

    @Column({name: 'Endereço', type: 'varchar', length: '80'})
    endereco: String;
    
    @Column({name: 'Bairro', type: 'varchar', length: '50'})
    bairro: String;
    
    @Column({name: 'Cidade', type: 'varchar', length: '50'})
    cidade: String;

    @Column({name: 'Cep', type: 'varchar',length: '8'})
    cep: String;

    @OneToMany(type => Pedido, pedido => pedido.cliente)
    pedido: Pedido[];
}
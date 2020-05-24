import { Module } from '@nestjs/common';
import { ItempedidoController } from './itempedido/itempedido.controller';
import { ItempedidoService } from './itempedido/itempedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/cliente.entity';
import { ItemPedido } from './itempedido/itempedido.entity';
import { Pedido } from './pedido/pedido.entity';
import { Produto } from './produto/produto.entity';
import { ClienteService } from './cliente/cliente.service';
import { PedidoService } from './pedido/pedido.service';
import { ProdutoService } from './produto/produto.service';
import { ClienteController } from './cliente/cliente.controller';
import { PedidoController } from './pedido/pedido.controller';
import { ProdutoController } from './produto/produto.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'masterkey',
    database: 'marketplace',
    entities: [
      Cliente,
      Produto,
      Pedido,
      ItemPedido,
    ],
    synchronize: true,
    logging: true
  }),
  TypeOrmModule.forFeature([
    Cliente,
    Produto,
    Pedido,
    ItemPedido,
  ])
],
  controllers: [
    ClienteController, 
    ItempedidoController,
    PedidoController,
    ProdutoController
  ],
  providers: [
    ClienteService,
    ItempedidoService,
    PedidoService,
    ProdutoService
  ],
})
export class AppModule {}

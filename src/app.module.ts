import { Module } from '@nestjs/common';
import { ItempedidoController } from './controller/itempedido.controller';
import { ItempedidoService } from './service/itempedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './model/cliente.entity';
import { ItemPedido } from './model/itempedido.entity';
import { Pedido } from './model/pedido.entity';
import { Produto } from './model/produto.entity';
import { ClienteService } from './service/cliente.service';
import { PedidoService } from './service/pedido.service';
import { ProdutoService } from './service/produto.service';
import { ClienteController } from './controller/cliente.controller';
import { PedidoController } from './controller/pedido.controller';
import { ProdutoController } from './controller/produto.controller';
import { EstoqueModule } from './controller/estoque.module';
import { Estoque } from './model/estoque.entity';
import { EstoqueController } from './controller/estoque.controller';
import { EstoqueService } from './service/estoque.service';

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
      Estoque
    ],
    synchronize: true,
    logging: true
  }),
  TypeOrmModule.forFeature([
    Cliente,
    Produto,
    Pedido,
    ItemPedido,
    Estoque
  ]),
  
],
  controllers: [
    ClienteController, 
    ItempedidoController,
    PedidoController,
    ProdutoController,
    EstoqueController
  ],
  providers: [
    ClienteService,
    ItempedidoService,
    PedidoService,
    ProdutoService,
    EstoqueService
  ],
})
export class AppModule {}

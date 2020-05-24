import { Test, TestingModule } from '@nestjs/testing';
import { ItempedidoController } from './itempedido.controller';

describe('Itempedido Controller', () => {
  let controller: ItempedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItempedidoController],
    }).compile();

    controller = module.get<ItempedidoController>(ItempedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

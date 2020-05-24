import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PedidoService } from "./pedido.service";
import { Pedido } from './pedido.entity';


@Controller('pedido')
export class PedidoController {

    constructor(private readonly service : PedidoService){}
    
    @Post()
    save(@Body() pedido: Pedido) {
        return this.service.save(pedido);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.remove(id);
    }
}

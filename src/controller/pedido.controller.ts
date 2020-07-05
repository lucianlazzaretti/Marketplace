import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PedidoService } from "../service/pedido.service";
import { Pedido } from '../model/pedido.entity';
import { PedidoDto } from './pedido.dto';
import {plainToClass} from 'class-transformer'


@Controller('pedido')
export class PedidoController {

    constructor(private readonly service : PedidoService){}
    
    @Post()
    save(@Body() pedidoDto: PedidoDto) {
        const pedido = plainToClass(Pedido,pedidoDto)
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

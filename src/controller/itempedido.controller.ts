import { Controller, Delete, Post, Body, Get, Param } from '@nestjs/common';
import { ItempedidoService } from '../service/itempedido.service';
import { ItemPedido } from '../model/itempedido.entity';
import {plainToClass} from 'class-transformer'
import { ItemPedidoDto } from './itempedido.dto';

@Controller('itempedido')
export class ItempedidoController {
    
    constructor (private readonly service : ItempedidoService){}

    @Post()
    save(@Body() itemPedidoDto : ItemPedidoDto){
        const itemPedido = plainToClass(ItemPedido,itemPedidoDto)
        return this.service.save(itemPedido);
    }


    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(":id")
    findById (@Param() id : number){
            return this.service.findById(id);
        }

    @Delete(":id")
    remove(@Param() id : number){
        return this.remove(id);
    }
}

import { Controller, Delete, Post, Body, Get, Param } from '@nestjs/common';
import { ItempedidoService } from './itempedido.service';
import { ItemPedido } from './itempedido.entity';

@Controller('itempedido')
export class ItempedidoController {
    
    constructor (private readonly service : ItempedidoService){}

    @Post()
    save(@Body() ItemPedido : ItemPedido){
        return this.service.save(ItemPedido);
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

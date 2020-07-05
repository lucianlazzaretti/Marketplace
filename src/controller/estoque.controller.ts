import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { EstoqueService } from '../service/estoque.service';
import { Estoque } from '../model/estoque.entity';
import {EstoqueDto} from './estoque.dto';
import {plainToClass} from 'class-transformer'

@Controller('estoque')
export class EstoqueController {

    constructor (private readonly service : EstoqueService){}

    @Post()
    save(@Body() estoqueDto : EstoqueDto){
        const estoque = plainToClass(Estoque,estoqueDto)
        return this.service.save(estoque);
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

    @Post(":id")
    update(@Param() id: number, quantidadeEstoque: number ,@Body() estoque: Estoque){
        return this.service.update(id, estoque);
    }
}
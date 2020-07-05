import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto.entity';
import {plainToClass} from 'class-transformer'
import { ProdutoDto } from './produto.dto';

@Controller('produto')
export class ProdutoController {

    constructor(private readonly service : ProdutoService){}
    
    @Post()
    save(@Body() produtoDto: ProdutoDto) {
        const produto = plainToClass(Produto,produtoDto)
        return this.service.save(produto);
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

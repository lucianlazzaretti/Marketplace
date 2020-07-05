import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente.entity';
import { ClienteDto } from './cliente.dto';
import {plainToClass} from 'class-transformer'

@Controller('cliente')
export class ClienteController {

    constructor (private readonly service : ClienteService){}

    @Post()
    save(@Body() clienteDto : ClienteDto){
        const cliente = plainToClass(Cliente,clienteDto)
        return this.service.save(cliente);
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

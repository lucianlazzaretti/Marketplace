import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";


export class ItemPedidoDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id: number;

}
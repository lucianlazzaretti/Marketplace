import { IsInt, IsString, MaxLength, MinLength, IsNumber, IsDate } from "class-validator";


export class PedidoDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id: number;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(20, { message: 'O campo deve ter no máximo 20 caracteres.' })
    numeroPedido: string;

    @IsDate({ message: 'Não é uma data válida!' })
    dataOrdem: Date;
    
    @IsNumber(null, { message: 'Náo é um número válido!' })
    quantidade: number;

    @IsDate({ message: 'Não é uma data válida!' })
    dataEntrega: Date;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(80, { message: 'O campo deve ter no máximo 80 caracteres.' })
    transportadora: string;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    valorUnitario: number;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    valorDesconto: number;

    @IsNumber(null, { message: 'Náo é um número válido!' })
    valorTotal: number;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(50, { message: 'O campo deve ter no máximo 50 caracteres.' })
    enderecoEntrega: string;

}
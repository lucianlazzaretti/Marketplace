import { IsInt, IsString, MaxLength, MinLength, IsNumber, IsDate } from "class-validator";


export class EstoqueDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id: number;

    @IsInt({ message: 'Não é um inteiro válido!' })
    quantidadeEstoque: number;
}
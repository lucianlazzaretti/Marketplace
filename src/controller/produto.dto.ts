import { IsInt, IsString, MaxLength, MinLength, IsNumber, IsDate } from "class-validator";


export class ProdutoDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id: number;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(80, { message: 'O campo deve ter no máximo 80 caracteres.' })
    nome: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(100, { message: 'O campo deve ter no máximo 100 caracteres.' })
    descricao: string;

    @IsInt({ message: 'Não é um inteiro válido!' })
    preco: number;

    @IsDate({ message: 'Não é uma data válida!' })
    data: Date;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(100, { message: 'O campo deve ter no máximo 100 caracteres.' })
    medida: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(20, { message: 'O campo deve ter no máximo 20 caracteres.' })
    codigo: string;

    @IsInt({ message: 'Não é um inteiro válido!' })
    estoqueQuantidade: number;

}
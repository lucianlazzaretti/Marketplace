import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";


export class ClienteDto {

    @IsInt({ message: 'Não é um inteiro válido!' })
    id: number;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    nome: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(14, { message: 'O campo deve ter no mínimo 14 caracteres.' })
    @MaxLength(14, { message: 'O campo deve ter no máximo 14 caracteres.' })
    cpf: string;
    
    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
    @MaxLength(10, { message: 'O campo deve ter no máximo 10 caracteres.' })
    rg: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(80, { message: 'O campo deve ter no máximo 80 caracteres.' })
    endereco: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(50, { message: 'O campo deve ter no máximo 50 caracteres.' })
    bairro: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MaxLength(50, { message: 'O campo deve ter no máximo 50 caracteres.' })
    cidade: string;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(8, { message: 'O campo deve ter no mínimo 8 caracteres.' })
    @MaxLength(8, { message: 'O campo deve ter no máximo 8 caracteres.' })
    cep: string;

}
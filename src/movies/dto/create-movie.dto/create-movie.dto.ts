import { IsString, IsNotEmpty, IsDate, IsArray, IsOptional, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMovieDto {
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El título no puede estar vacío.' })
  @MinLength(2, { message: 'El título debe tener al menos 2 caracteres.' })
  title: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
  description: string;

  @IsDate({ message: 'La fecha de lanzamiento debe ser un formato de fecha valido.' })
  @Type(() => Date)
  release_date: Date;

  @IsOptional()
  @IsString({ message: 'La URL del poster debe ser una cadena de texto.' })
  poster_url?: string;

  @IsArray({ message: 'Las categorías deben ser un arreglo de números.' })
  categories: number[];
}
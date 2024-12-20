import { IsString, IsNotEmpty, IsDate, IsArray, MinLength, ArrayNotEmpty, IsInt } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDate()
    @IsNotEmpty()
    release_date: Date;

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    categories: number[];
}

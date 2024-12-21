import { Body, Controller, Get, Query, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMovieDto } from './dto/create-movie.dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { S3Service } from '../s3/s3.service';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly s3Service: S3Service,
  ) {}

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    console.log(createMovieDto);
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  searchMovies(@Query('name') name: string, @Query('category') category: number) {
    console.log(name, category);
    return this.moviesService.search(name, category);
  }

  @Get(':id')
  getMovie(@Param('id') id: number) {
    return this.moviesService.findById(id);
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPoster(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
    const posterUrl = await this.s3Service.uploadFile(file);
    return this.moviesService.updatePosterUrl(id, posterUrl);
  }
}
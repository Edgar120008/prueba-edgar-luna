import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const categories = await this.categoriesRepository.findByIds(createMovieDto.categories);
    if (categories.length !== createMovieDto.categories.length) {
      throw new Error('One or more categories do not exist');
    }
    const newMovie = this.moviesRepository.create({
      ...createMovieDto,
      categories,
    });
    return this.moviesRepository.save(newMovie);
  }

  async search(name: string, category: number): Promise<Movie[]> {
    return this.moviesRepository
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.categories', 'category')
      .where('movie.title LIKE :name', { name: `%${name}%` })
      .andWhere('category.id = :category', { category })
      .getMany();
  }

  async findById(id: number): Promise<Movie> {
    return this.moviesRepository.findOne({
      where: { id },
      relations: ['categories'],
    });
  }

  async updatePosterUrl(id: number, posterUrl: string): Promise<Movie> {
    const movie = await this.moviesRepository.findOneBy({ id });
    if (!movie) {
      throw new Error('Movie not found');
    }
    movie.poster_url = posterUrl;
    return this.moviesRepository.save(movie);
  }
}
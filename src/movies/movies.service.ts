import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto/create-movie.dto';

@Injectable()
export class MoviesService {
    private readonly movies = [];

    create(createMovieDto: CreateMovieDto) {
        const newMovie = {
            id: this.movies.length + 1,
            ...createMovieDto,
            poster_url: '',
        };
        this.movies.push(newMovie);
        return newMovie;
    }
    search(name: string, category: number) {
        return this.movies.filter(movie => 
            (!name || movie.title.includes(name)) &&
            (!category || movie.categories.includes(category))
        );
    }

    findById(id: number) {
            return this.movies.find(movie => movie.id === id);
        }
    
    updatePosterUrl(id: number, posterUrl: string) {
            const movie = this.findById(id);
            if (movie) {
                movie.poster_url = posterUrl;
                return movie;
            }
            throw new Error('Movie not found');
        }
}



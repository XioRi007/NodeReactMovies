import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
  ) {}
  create(createMovieDto: CreateMovieDto) {
    return this.moviesRepository.create(createMovieDto);
  }

  findAll() {
    return this.moviesRepository.find();
  }

  findOne(id: number) {
    return this.moviesRepository.findOneBy({id});
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.moviesRepository.update(id,updateMovieDto);
  }

  remove(id: number) {
    return this.moviesRepository.delete(id);
  }
}

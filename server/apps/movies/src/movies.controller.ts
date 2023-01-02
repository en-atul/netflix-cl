import { Controller, Get } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller()
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getHello(): string {
    return this.moviesService.getHello();
  }
}

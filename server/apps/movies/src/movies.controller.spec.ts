import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

describe('MoviesController', () => {
  let moviesController: MoviesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    moviesController = app.get<MoviesController>(MoviesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moviesController.getHello()).toBe('Hello World!');
    });
  });
});

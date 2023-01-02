import { Test, TestingModule } from '@nestjs/testing';
import { WebSeriesController } from './web-series.controller';
import { WebSeriesService } from './web-series.service';

describe('WebSeriesController', () => {
  let webSeriesController: WebSeriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebSeriesController],
      providers: [WebSeriesService],
    }).compile();

    webSeriesController = app.get<WebSeriesController>(WebSeriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(webSeriesController.getHello()).toBe('Hello World!');
    });
  });
});

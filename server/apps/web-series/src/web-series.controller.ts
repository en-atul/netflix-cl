import { Controller, Get } from '@nestjs/common';
import { WebSeriesService } from './web-series.service';

@Controller()
export class WebSeriesController {
  constructor(private readonly webSeriesService: WebSeriesService) {}

  @Get()
  getHello(): string {
    return this.webSeriesService.getHello();
  }
}

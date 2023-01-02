import { Module } from '@nestjs/common';
import { WebSeriesController } from './web-series.controller';
import { WebSeriesService } from './web-series.service';

@Module({
  imports: [],
  controllers: [WebSeriesController],
  providers: [WebSeriesService],
})
export class WebSeriesModule {}

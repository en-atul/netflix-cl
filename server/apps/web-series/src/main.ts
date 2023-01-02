import { NestFactory } from '@nestjs/core';
import { WebSeriesModule } from './web-series.module';

async function bootstrap() {
  const app = await NestFactory.create(WebSeriesModule);
  await app.listen(3000);
}
bootstrap();

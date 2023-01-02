import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MoviesModule } from './movies.module';

async function bootstrap() {
  const app = await NestFactory.create(MoviesModule);
  app.setGlobalPrefix('api');
  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5673'],
      queue: 'books_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
  Logger.log('Movies microservice running');
}
bootstrap();

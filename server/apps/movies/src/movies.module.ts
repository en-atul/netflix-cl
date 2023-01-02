import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_AUTH',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5673'],
          queue: 'auth_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'SERVICE_WEB_SERIES',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5673'],
          queue: 'web_series_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: `./apps/movies/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}

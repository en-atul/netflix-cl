import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WebSeriesController } from './web-series.controller';
import { WebSeriesService } from './web-series.service';

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
        name: 'SERVICE_MOVIES',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5673'],
          queue: 'movies_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: `./apps/web-series/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
  ],
  controllers: [WebSeriesController],
  providers: [WebSeriesService],
})
export class WebSeriesModule {}

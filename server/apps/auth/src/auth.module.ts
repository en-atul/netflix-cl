import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ClientsModule.register([
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
      envFilePath: `./apps/auth/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

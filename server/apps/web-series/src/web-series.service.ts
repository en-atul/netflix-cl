import { Injectable } from '@nestjs/common';

@Injectable()
export class WebSeriesService {
  getHello(): string {
    return 'Hello World!';
  }
}

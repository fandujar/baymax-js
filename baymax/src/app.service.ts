import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLiveness(): Object {
    return {
      status: 'alive'
    };
  }
  getReadiness(): Object {
    return {
      status: 'ready'
    };
  }
}
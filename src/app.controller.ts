import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('liveness')
  getLiveness(): Object {
    return this.appService.getLiveness();
  }

  @Get('readiness')
  getReadiness(): Object {
    return this.appService.getReadiness();
  }
}

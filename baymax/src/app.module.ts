import { Module } from '@nestjs/common';
import {EventEmitterModule} from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 

import {SlackModule} from './slack/slack.module'

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      newListener: true,
      removeListener: true,
    }),
    SlackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


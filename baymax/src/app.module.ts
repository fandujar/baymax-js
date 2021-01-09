import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';


import {SlackModule} from './slack/slack.module'

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      newListener: true,
      removeEventListener: true,
    }),
    SlackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


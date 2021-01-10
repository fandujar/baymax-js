import { Module, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';


@Module({})
export class SlackModule implements OnModuleInit {
    constructor(private eventEmitter: EventEmitter2) {}

    onModuleInit(){
        this.eventEmitter.emit(
            'baymax.slack.initialize',
            {
                message: 'Slack module initialized'
            },
        );
    }
    
    @OnEvent('baymax.slack.initialize', { async: true })
    handleSlackModuleInitialize(payload: Object) {
      console.log(payload)
    }
}
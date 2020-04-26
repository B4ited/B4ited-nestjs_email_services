import { Controller, Get } from '@nestjs/common';
import { SendService } from 'src/send/send.service';

@Controller()
export class AppController {
  constructor( readonly SendService: SendService) {}

  


  @Get('send')
  sendMail(): any {
    return this.SendService.example();
  }

  @Get('template')
  sendTemplate(): any {
    return this.SendService.example2();
  }
}

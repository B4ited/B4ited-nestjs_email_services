import { Controller, Get } from '@nestjs/common';
import { SendService } from 'src/send/send.service';
import {ConfirmService} from  'src/confirm/confirm.service';


@Controller()
export class AppController {
  constructor( readonly SendService: SendService, readonly ConfirmService: ConfirmService) {}

  @Get('confirm')  
  confirm(): any{
      return this.ConfirmService. createHashUrl();
  }


  @Get('send')
  sendMail(): any {
    return this.SendService.example();
  }

  @Get('template')
  sendTemplate(): any {
    return this.SendService.example2();
  }
}

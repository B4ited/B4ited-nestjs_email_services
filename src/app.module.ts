require('dotenv').config()
import { Module } from '@nestjs/common';
import{AppController} from 'src/app.controller';
import{AppService} from 'src/app.service';
import { SendService } from 'src/send/send.service';
import { HandlebarsAdapter, MailerModule } from '@nestjs-modules/mailer';
import { from } from 'rxjs';
import { ConfirmService } from './confirm/confirm.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_ID, // generated ethereal user
          pass: process.env.EMAIL_PASS // generated ethereal password
        }
      },
      defaults: {
        from: '"nest-modules" test@globaltracker.nhely.hu', // outgoing email ID
      },
     
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService,SendService,ConfirmService],
})
export class AppModule { }

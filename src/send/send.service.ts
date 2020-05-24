import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfirmService } from 'src/confirm/confirm.service';


@Injectable()
export class SendService {
  constructor(private readonly mailerService: MailerService,private readonly confirmService: ConfirmService) { }

  getHello(): string {
    return 'Hello World!';
  }

  public example(): void {
    this
      .mailerService.sendMail({
        to: 'fodorbalazs98@gmail.com', // List of receivers email address
        from: 'test@globaltracker.nhely.hu', // Senders email address
        subject: 'Testing Nest MailerModule ✔', // Subject line
       // text: '<p>Confirm link: '+this.confirmService.createHashUrl('fodorbalazs98@gmail.com')+'<p>', // plaintext body
        html: '<p>Confirm link: '+this.confirmService.createHashUrl()+'<p>', // HTML body content
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  public example2(): void {
    this
      .mailerService.sendMail({
        to: 'fodorbalazs98@gmail.com', // List of receivers email address
        from: 'test@globaltracker.nhely.hu', // Senders email address
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  public example3(): void {
    this
      .mailerService.sendMail({
        to: 'fodorbalazs47@gmail.com',
        from: 'test@globaltracker.nhely.hu',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: __dirname + '/index', // The `.pug` or `.hbs` extension is appended automatically.
        context: {  // Data to be sent to template engine.
          code: 'cf1a3f828287',
          username: 'john doe',
        },
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }

}

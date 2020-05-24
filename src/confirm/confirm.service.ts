import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
//import {model} from 'src/model/link.js';
import { Observable, asapScheduler } from 'rxjs';

@Injectable()
export class ConfirmService{


public  createHashUrl(){

    const hashedurl =bcrypt.hash("asd",12); 
    
    const url = `http://localhost:3000/confirm/${hashedurl}`;
    console.log(url);

    return url;  
}
    

/*public  confirmTest(): void{

    const hashedurl =bcrypt.hash(model.user.password, 12);
    const user =  model.user.create({
        password: hashedurl,
      });
    
var sha256=crypto.createHash('sha256');

 
}*/



}

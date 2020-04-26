import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class ConfirmService{


public  createHashUrl(email){

    const hashedurl =bcrypt.hash(email, 12);
    console.log(hashedurl);
    const url='https://localhost:3000/confirm/'+hashedurl;
    return url;    
}


}

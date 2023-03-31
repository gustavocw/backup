import { HttpCode, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { MailClientImplementation } from "src/providers/Implementations/Mail.implementation";
import { ClientRegister } from "src/repositories/implementations/ClientRegister.service";
import { IDataForClient } from "./Client.DTO";
import * as moment from 'moment';

@Injectable()
export class ClientService{
    constructor(
        private readonly ClientImplements:ClientRegister,
        private readonly mailClient:MailClientImplementation,
    ){};

    async RegisterClient(data:IDataForClient){
        const findEmail = await this.ClientImplements.findByEmail(data.email);
        if(findEmail !== null){
            throw new HttpException('Email existente!', HttpStatus.BAD_REQUEST);
        };
        
        const hash = Math.floor(Math.random() * 6) ;
        const dateNow = new Date().getHours() + 1;
        const saved = await this.ClientImplements.saveTheUser(data, hash, dateNow);

        const findEmail2 = await this.mailClient.findByEmail(data.email);
        const sendEmail = await this.mailClient.sendCodeForEmail({
            to: {
                name: 'Olá!',
                address: data.email,
            },
            from:{
                name:'Seja bem-vindo(a) a plataforma!',
                address: 'suporteBallas@gmail.com',
            },
            subject:'Token de verificação de conta!',
            body:'',
        }, data.email, hash, dateNow);
        
        return saved;
    };
};

import { Injectable } from "@nestjs/common";
import { MailClientImplementation } from "src/providers/Implementations/Mail.implementation";
import { MailEscortImplementation } from "src/providers/Implementations/MailEscort.implementation";
import { IRecoverDTO } from "./RecoverPass.DTO";

@Injectable()
export class RecoverPass{
    constructor(
        private clientImplementation:MailClientImplementation,
        private escortImplementation:MailEscortImplementation,
    ){};

    async recover_client(data:IRecoverDTO){
        const hash = Math.floor(Math.random() * 6) ;
        const dateNow = new Date().getHours();
        const new_hour = dateNow + 1;

        const findMail = await this.clientImplementation.findByEmail(data.email);
        const sendMail = await this.clientImplementation.sendCodeForEmail({
            from:{
                name:'Seja bem-vindo(a) a plataforma!',
                address: 'suporteBallas@gmail.com',
            },
            to: {
                name: `Olá < ${data.email} >`,
                address: data.email,
            },
            subject:'Token de verificação de conta!',
            body:'',
        }, data.email, hash, new_hour);
    };

    async recover_escort(data:IRecoverDTO){
        const hash = Math.floor(Math.random() * 6) ;
        const dateNow = new Date().getHours();
        const new_hour = dateNow + 1;

        const findMail = await this.escortImplementation.findByEmail(data.email);
        const sendMail = await this.escortImplementation.sendCodeForEmail({
            from:{
                name:'Seja bem-vindo(a) a plataforma!',
                address: 'suporteBallas@gmail.com',
            },
            to: {
                name: `Olá < ${data.email} >`,
                address: data.email,
            },
            subject:'Token de verificação de conta!',
            body:'',
        }, data.email, hash, new_hour);
    };
};

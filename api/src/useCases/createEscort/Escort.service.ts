import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { MailEscortImplementation } from "src/providers/Implementations/MailEscort.implementation";
import { EscortRegisterImplementation } from "src/repositories/implementations/EscortRegister.service";
import { IEscortDTO } from "./Escort.DTO";

@Injectable()
export class EscortService {
    constructor(
        private readonly EscortImplements:EscortRegisterImplementation,
        private readonly mailEscort:MailEscortImplementation,
    ){};

    async RegisterEscort(data:IEscortDTO){
        const findEmail = await this.EscortImplements.findByEmail(data.email);
        if(findEmail !== null){
            throw new HttpException('Email existente!', HttpStatus.BAD_REQUEST);
        };
        
        const hash = Math.floor(Math.random() * 6) ;
        const dateNow = new Date().getHours();
        const new_hour = dateNow + 1;
        const saved = await this.EscortImplements.saveTheUser(data, hash, new_hour);

        const findEmail2 = await this.mailEscort.findByEmail(data.email);
        const sendEmail = await this.mailEscort.sendCodeForEmail({
            to: {
                name: data.name,
                address: data.email,
            },
            from:{
                name:'Seja bem-vindo(a) a plataforma!',
                address: 'suporteBallas@gmail.com',
            },
            subject:'Token de verificação de conta!',
            body:'',
        }, data.email, hash, new_hour);
        return saved;
    };
}
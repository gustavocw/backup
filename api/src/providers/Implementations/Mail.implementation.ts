import { AMailTransporter, IMailMessage } from "../IMail.implementation";
import { PrismaService } from "src/database";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailClientImplementation implements AMailTransporter {
    private mailer: Mail
    constructor(
        private prisma:PrismaService,
    ){
        this.mailer = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "bd4af977b9aa92",
              pass: "56a65a710f20c8"
            },
        });
    };

    async findByEmail(email: string): Promise<void> {
        const searchForEmail = await this.prisma.client.findUnique(
            { where:{ email } },
        );

        if(searchForEmail === null){
            throw new HttpException('Email inexistente', HttpStatus.NOT_FOUND);
        };
        
    };
    async sendCodeForEmail(details: IMailMessage, email:string, code:number, codeDate:number): Promise<void> {
        const sendCode = await this.prisma.client.update({
            where: { email },
            data:{
                code,
                codeDate,
            },
        });
        await this.mailer.sendMail({
            to:{
                name: details.to.name,
                address: details.to.address,
            },
            from:{
                name: details.from.name,
                address: details.from.address,
            },
            subject: details.subject,
            html: `<p>Segue o token para verificação de conta: ${code}</p>`,
        });
    };
};

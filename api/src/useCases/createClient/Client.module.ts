import { forwardRef, Module } from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import { PrismaService } from "src/database";
import { MailClientImplementation } from "src/providers/Implementations/Mail.implementation";
import { ClientRegister } from "src/repositories/implementations/ClientRegister.service";
import { ClientController } from "./Client.controller";
import { ClientService } from "./Client.service";

@Module({
    imports: [],
    controllers: [ClientController],
    providers: [
        PrismaService,
        ClientService, 
        ClientRegister,
        MailClientImplementation,
    ],
})
export class ClientModule{};

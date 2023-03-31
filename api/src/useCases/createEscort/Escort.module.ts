import { Module } from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import { PrismaService } from "src/database";
import { token_middleware } from "src/middlewares/jwt.middleware";
import { MailEscortImplementation } from "src/providers/Implementations/MailEscort.implementation";
import { EscortRegisterImplementation } from "src/repositories/implementations/EscortRegister.service";
import { EscortController } from "./Escort.controller";
import { EscortService } from "./Escort.service";

@Module({
    imports: [],
    controllers: [EscortController],
    providers: [
        PrismaService,
        EscortService,
        EscortRegisterImplementation,
        MailEscortImplementation,
        token_middleware,
    ],
})
export class EscortRegisterModule{};
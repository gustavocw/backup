import { Module } from "@nestjs/common";
import { PrismaService } from "src/database";
import { MailClientImplementation } from "src/providers/Implementations/Mail.implementation";
import { MailEscortImplementation } from "src/providers/Implementations/MailEscort.implementation";
import { RecoverController } from "./RecoverPass.controller";
import { RecoverPass } from "./RecoverPass.service";

@Module({
    imports: [],
    controllers: [RecoverController],
    providers: [
        PrismaService,
        RecoverPass,
        MailClientImplementation,
        MailEscortImplementation,
    ]
})
export class RecoverModule{};

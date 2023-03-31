import { Module } from "@nestjs/common";
import { PrismaService } from "src/database";
import { EscortLoginImplementations } from "src/repositories/implementations/EscortLogin.service";
import { EscortLoginController } from "./LoginEscort.controller";
import { loginEscortService } from "./LoginEscort.service";

@Module({
    imports: [],
    controllers: [EscortLoginController],
    providers: [
        PrismaService,
        loginEscortService,
        EscortLoginImplementations,
        EscortLoginController,
    ],
})
export class EscortLoginModule{};

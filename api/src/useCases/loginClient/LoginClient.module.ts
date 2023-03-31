import { Module } from "@nestjs/common";
import { PrismaService } from "src/database";
import { ClientLoginImplementation } from "src/repositories/implementations/ClientLogin.service";
import { LoginClientController } from "./LoginClient.controller";
import { LoginClientService } from "./LoginClient.service";

@Module({
    imports: [],
    controllers: [LoginClientController],
    providers: [
        LoginClientService,
        PrismaService,
        ClientLoginImplementation,
    ],
})
export class LoginClientModule{};
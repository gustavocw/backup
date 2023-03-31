import { Body, Controller, Post } from "@nestjs/common";
import { response } from "express";
import { ILoginClientDTO } from "./LoginClient.DTO";
import { LoginClientService } from "./LoginClient.service";

@Controller('client')
export class LoginClientController {
    constructor(
        private loginClientService:LoginClientService,
    ){};

    @Post('login')
    async login(@Body() body:ILoginClientDTO){
        try {
            const sendLogin = await this.loginClientService.handle_login(body);
            return sendLogin;
        } catch (error) {
            return error;
        };
    };
};
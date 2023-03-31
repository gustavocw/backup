import { Body, Controller, Post } from "@nestjs/common";
import { IEscortLoginDTO } from "./LoginEscort.DTO";
import { loginEscortService } from "./LoginEscort.service";

@Controller('escort')
export class EscortLoginController {
    constructor(
        private readonly escortService:loginEscortService,
    ){};
    @Post('login')
    async loginEscort(@Body() body:IEscortLoginDTO){
        try {
            const login = await this.escortService.handle_loginEscort(body);
            return login;   
        } catch (error) {
            return error;
        };
    };
};

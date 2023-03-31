import { Body, Controller, Post } from "@nestjs/common";
import { IRecoverDTO } from "./RecoverPass.DTO";
import { RecoverPass } from "./RecoverPass.service";

@Controller('recover')
export class RecoverController {
    constructor(
        private readonly recoverService:RecoverPass,
    ){};

    @Post('client')
    async handle_client(@Body() body:IRecoverDTO){
        try {
            const sended = await this.recoverService.recover_client(body);
            return { message:'Email enviado', code:true };
        } catch (error) {
            return error;
        }
    };

    @Post('escort')
    async handle_escort(@Body() body:IRecoverDTO){
        try {
            const sended = await this.recoverService.recover_escort(body);
            return { message:'Email enviado', code:true };
        } catch (error) {
            return error;
        }
    };
}
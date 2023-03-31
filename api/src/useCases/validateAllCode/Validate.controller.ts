import { Body, Controller, Post } from "@nestjs/common";
import { IValidateDTO } from "./Validate.DTO";
import { ValidateService } from "./Validate.service";

@Controller('code')
export class ValidateController{
    constructor(
        private readonly validateService:ValidateService,
    ){};

    @Post('client')
    async handle_code(@Body() body:IValidateDTO){
        try {
            const sended = await this.validateService.handle_validate_client(body);
            return sended;
        } catch (error) {
            return error;
        };
    };

    @Post('escort')
    async handle_code_escort(@Body() body:IValidateDTO){
        try {
            const sended = await this.validateService.handle_validate_escort(body);
            return sended;
        } catch (error) {
            return error;
        };
    };
};

import { Injectable } from "@nestjs/common";
import { ValidateImplementation } from "src/repositories/implementations/Validate.service";
import { IValidateDTO } from "./Validate.DTO";
import * as moment from 'moment';

@Injectable()
export class ValidateService {
    constructor(
        private readonly validateImplemenetation:ValidateImplementation,
    ){};

    async handle_validate_client(data:IValidateDTO){
        const hour_now = new Date().getHours();
        console.log(hour_now)
        const sendCode = await this.validateImplemenetation.validateByCodeClient({
            code: data.code,
            hour: hour_now,
        });
        return sendCode;
    };

    async handle_validate_escort(data:IValidateDTO){
        const hour_now = new Date().getHours();
        const sendCode = await this.validateImplemenetation.validateByCodeEscort({
            code: data.code,
            hour: hour_now,
        });
        return sendCode;
    };
};

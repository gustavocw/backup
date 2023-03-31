import { IsNotEmpty } from "class-validator"

export class IValidateDTO {
    @IsNotEmpty()
    code:number;
    
    hour:number;
};

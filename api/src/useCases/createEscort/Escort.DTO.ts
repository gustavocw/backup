import { IsNotEmpty } from "class-validator";

export class IEscortDTO {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    sexo:string;

    @IsNotEmpty()
    city:string;
};

import { IsNotEmpty } from "class-validator";

export class IEscortLoginDTO {
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string;
};

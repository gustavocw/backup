import { Injectable } from "@nestjs/common";
import { EscortLoginImplementations } from "src/repositories/implementations/EscortLogin.service";
import { IEscortLoginDTO } from "./LoginEscort.DTO";

@Injectable()
export class loginEscortService {
    constructor(
        private escortLoginImplementation:EscortLoginImplementations,
    ){};
    async handle_loginEscort(data:IEscortLoginDTO){
        try {
            const handle_login = await this.escortLoginImplementation.login(data);
            console.log("Aqui", handle_login)
            return handle_login;
        } catch (error) {
            return error;
        };
    };
};

import { Injectable } from "@nestjs/common";
import { ClientLoginImplementation } from "src/repositories/implementations/ClientLogin.service";
import { ILoginClientDTO } from "./LoginClient.DTO";

@Injectable()
export class LoginClientService {
    constructor(
        private loginImplementation:ClientLoginImplementation,
    ){};

    async handle_login(data:ILoginClientDTO){
        try {
            const execute_login = await this.loginImplementation.login(data);
            return execute_login;
        } catch (error) {
            return error
        }
    };
};

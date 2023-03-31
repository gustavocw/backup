import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
import * as bcrypt from 'bcryptjs';
import { generateToken } from "src/utils/generateToken.utils";

import { ILoginClientDTO } from "src/useCases/loginClient/LoginClient.DTO";
import { ALoginClient } from "../ILogin.account";
import { Client } from "@prisma/client";

@Injectable()
export class ClientLoginImplementation implements ALoginClient{
    constructor(
        private prisma:PrismaService,
    ){};

    async login({ email, password }: ILoginClientDTO): Promise<Client | Object> {
        const loginClient = await this.prisma.client.findUnique(
            {
                where: { email },
            },
        );
        if(loginClient === null){
            throw new HttpException('Email ou senha incorretos!', HttpStatus.BAD_REQUEST);
        };

        if(!await bcrypt.compare(password, loginClient.password)){
            throw new HttpException('Email ou senha incorretos!', HttpStatus.BAD_REQUEST);
        };
        return { login: true, token: generateToken({ id:loginClient.id }) };
    };
};

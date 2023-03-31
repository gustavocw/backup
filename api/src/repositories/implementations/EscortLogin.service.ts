import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
import * as bcrypt from 'bcryptjs';
import { generateToken } from "src/utils/generateToken.utils";

import { Escort } from "@prisma/client";
import { ALoginEscort } from "../ILoginEscort.account";
import { IEscortLoginDTO } from "src/useCases/loginEscort/LoginEscort.DTO";

@Injectable()
export class EscortLoginImplementations implements ALoginEscort{
    constructor(
        private prisma:PrismaService,
    ){};

    async login({ email, password }: IEscortLoginDTO): Promise<Escort | Object> {
        const loginEscort = await this.prisma.escort.findUnique(
            {
                where: { email, }
            },
        );
        if(loginEscort === null){
            throw new HttpException('Email ou senha incorretos!', HttpStatus.BAD_REQUEST);
        };

        if(!await bcrypt.compare(password, loginEscort.password)){
            throw new HttpException('Email ou senha incorretos!', HttpStatus.BAD_REQUEST);
        };
        return { login: true, token: generateToken({ id:loginEscort.id, escort:loginEscort.escort }) };
    };
};

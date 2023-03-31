import { Injectable } from "@nestjs/common";
import { Escort } from "@prisma/client";
import * as bcrypt from 'bcryptjs';

import { PrismaService } from "src/database";
import { IEscortDTO } from "src/useCases/createEscort/Escort.DTO";
import { generateToken } from "src/utils/generateToken.utils";
import { AEscortService } from "../IEscort.account";

@Injectable()
export class EscortRegisterImplementation implements AEscortService{
    constructor(
        private prisma:PrismaService,
    ){};

    async findByEmail(email: string): Promise<Escort> {
        const findByClient = await this.prisma.escort.findUnique({
            where: { email },
        });

        return findByClient;
    };
    async saveTheUser({ email, name, password, sexo, city }:IEscortDTO, code:number, codeDate:number): Promise<Escort | Object> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const clientRegisted = await this.prisma.escort.create({
            data:{
                email,
                name,
                password: hash,
                sexo,
                code,
                codeDate,
                city,
            },
        });

        return {user: clientRegisted, token: generateToken({ id:clientRegisted.id, escort:clientRegisted.escort })};
    };
};

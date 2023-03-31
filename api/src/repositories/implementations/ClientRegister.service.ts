import { Injectable } from "@nestjs/common";
import { Client } from "@prisma/client";
import * as bcrypt from 'bcryptjs';

import { PrismaService } from "src/database";
import { IDataForClient } from "src/useCases/createClient/Client.DTO";
import { AClientService } from "../IClient.account";

@Injectable()
export class ClientRegister implements AClientService{
    constructor(
        private prisma:PrismaService,
    ){};

    async findByEmail(email: string): Promise<Client> {
        const findByClient = await this.prisma.client.findUnique({
            where: { email },
        });

        return findByClient;
    };

    async saveTheUser({ email, password }:IDataForClient, code:number, codeDate:number): Promise<Client | Object> {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const clientRegisted = await this.prisma.client.create({
            data:{
                email,
                password: hash,
                code,
                codeDate,
            },
        });

        return { user: clientRegisted };
    };
};

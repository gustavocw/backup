import { Client } from "@prisma/client";
import { IDataForClient } from "src/useCases/createClient/Client.DTO";

export abstract class AClientService{
    abstract findByEmail(email:string): Promise<Client>;
    abstract saveTheUser(data:IDataForClient, code:number, codeDate:number): Promise<Client | Object>;
};
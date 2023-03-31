import { Escort } from "@prisma/client";
import { IEscortDTO } from "src/useCases/createEscort/Escort.DTO";

export abstract class AEscortService{
    abstract findByEmail(email:string): Promise<Escort>;
    abstract saveTheUser(data:IEscortDTO, code:number, codeDate:number): Promise<Escort | Object>;
};
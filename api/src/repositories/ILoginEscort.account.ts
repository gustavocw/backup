import { Escort } from "@prisma/client";
import { IEscortLoginDTO } from "src/useCases/loginEscort/LoginEscort.DTO";

export abstract class ALoginEscort {
    abstract login(data:IEscortLoginDTO): Promise<Escort | Object>;
};

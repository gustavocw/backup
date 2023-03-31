import { Client } from "@prisma/client";
import { ILoginClientDTO } from "src/useCases/loginClient/LoginClient.DTO";

export abstract class ALoginClient {
    abstract login(data:ILoginClientDTO): Promise<Client | Object>;
};

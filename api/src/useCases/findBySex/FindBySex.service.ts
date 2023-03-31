import { Injectable } from "@nestjs/common";
import { FindBySexImplementation } from "src/repositories/implementations/FindBySex.service";
import { IBySexDTO } from "./FindBySex.DTO";

@Injectable()
export class FindBySexService {
    constructor(
        private listBysex:FindBySexImplementation,
    ){};

    async select_by_sex(data:IBySexDTO){
        const selected = await this.listBysex.findBySex(data);
        return selected;
    };
};

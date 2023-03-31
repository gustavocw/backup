import { Injectable } from "@nestjs/common";
import { ListDetailsOfEscortImplementation } from "src/repositories/implementations/ListAllDetails.service";

@Injectable()
export class ListAllDetailsOfEscortService {
    constructor(
        private listAllImplementation:ListDetailsOfEscortImplementation,
    ){};

    async select_all(){
        const selected = await this.listAllImplementation.findAllEscorts();
        return selected;
    };
};

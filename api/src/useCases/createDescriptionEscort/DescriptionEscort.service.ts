import { Injectable } from "@nestjs/common";
import { DescriptionEscortImplementation } from "src/repositories/implementations/DescriptionEscort.service";
import { IDescriptionEscortDTO } from "./DescriptionEscort.DTO";

@Injectable()
export class CreateDescriptionService {
    constructor(
        private descriptionImplementation:DescriptionEscortImplementation,
    ){};

    async createDescriptionEscort(data:IDescriptionEscortDTO){
        const savedDescription = await this.descriptionImplementation.createDescription(data);
        return savedDescription;
    };
};

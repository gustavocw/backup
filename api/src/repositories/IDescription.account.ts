import { IDescriptionEscortDTO } from "src/useCases/createDescriptionEscort/DescriptionEscort.DTO";

export abstract class ADescription {
    abstract createDescription(data:IDescriptionEscortDTO): Promise<void>;
};

import { IValidateDTO } from "src/useCases/validateAllCode/Validate.DTO";

export abstract class AValidateCode {
    abstract validateByCodeClient(data:IValidateDTO): Promise<Object>;
    abstract validateByCodeEscort(data:IValidateDTO): Promise<Object>;
};

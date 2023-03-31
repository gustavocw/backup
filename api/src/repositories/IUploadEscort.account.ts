import { IFileDTO } from "src/useCases/UploadEscort/UploadImage.DTO";

export abstract class AUploadEscort {
    abstract findByFiveImages(data:IFileDTO): Promise<void>;
    abstract createUpload(data:IFileDTO): Promise<void>;
};

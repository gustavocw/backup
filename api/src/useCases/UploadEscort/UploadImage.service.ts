import { Injectable } from "@nestjs/common";
import { UploadEscortImplementations } from "src/repositories/implementations/UploadEscort.service";
import { IFileDTO } from "./UploadImage.DTO";

@Injectable()
export class UploadEscortService {
    constructor(
        private uploadImagesImplementation:UploadEscortImplementations,
    ){};

    async handle_upload(data:IFileDTO){
        const validateQnt = await this.uploadImagesImplementation.findByFiveImages(data);
        const saved = await this.uploadImagesImplementation.createUpload(data);
    };
};

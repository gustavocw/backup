import { Controller, Post, Request, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UploadEscortService } from "./UploadImage.service";
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { CustomRequest } from "src/interfaces/Request.interface";

@Controller('upload')
export class UploadEscortController {
    constructor(
        private uploadEscortService:UploadEscortService,
    ){};

    @Post('images')
    @UseInterceptors(FileInterceptor('file'))
    async run_upload(@UploadedFile() file, @Request() req:CustomRequest){
        try {
            const uploaded = await this.uploadEscortService.handle_upload({urlPhoto:file.location, userId:req.userId});
            return { upload:true, erro:false };
        } catch (error) {
            return error;
        };
    };
};
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
import { IFileDTO } from "src/useCases/UploadEscort/UploadImage.DTO";
import { AUploadEscort } from "../IUploadEscort.account";

@Injectable()
export class UploadEscortImplementations implements AUploadEscort {
    constructor(
        private prisma:PrismaService,
    ){};

    async findByFiveImages(data: IFileDTO): Promise<void> {
      const findByQuantityImages = await this.prisma.escort.findUnique({
        where: { id:data.userId },
        include: { imagesEscort:true },
      });

      if(findByQuantityImages.imagesEscort.length === 5){
        throw new HttpException({message: 'Total de imagens exedido!', erro:true}, HttpStatus.BAD_REQUEST);
      };
    };
    async createUpload(data: IFileDTO): Promise<void> {
        const createImages = await this.prisma.escort.update({
            where: { id:data.userId },
            data:{
                imagesEscort:{
                    create:{
                        urlPhoto:data.urlPhoto,
                    }
                }
            },
        });
    };
};
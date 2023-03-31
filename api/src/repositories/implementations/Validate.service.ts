import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database";
import { IValidateDTO } from "src/useCases/validateAllCode/Validate.DTO";
import { generateToken } from "src/utils/generateToken.utils";
import { AValidateCode } from "../IValidate.account";

@Injectable()
export class ValidateImplementation implements AValidateCode {
    constructor(
        private prisma:PrismaService,
    ){};

    async validateByCodeClient(data: IValidateDTO): Promise<Object> {
        const findByCodeAndDate = await this.prisma.client.findMany({
            where: {
                code: data.code,
            },
        });

        console.log(findByCodeAndDate)

        if(findByCodeAndDate.length === 0 || findByCodeAndDate[0].codeDate <= data.hour){
            throw new HttpException('Código inválido, ou inspirado!!', HttpStatus.BAD_REQUEST);
        };

        return { code:true, token:generateToken({ id:findByCodeAndDate[0].id })};
    };

    async validateByCodeEscort(data: IValidateDTO): Promise<Object> {
        const findByCodeAndDate = await this.prisma.client.findMany({
            where: {
                code: data.code,
                codeDate: data.hour,
            },
        });

        if(findByCodeAndDate.length === 0 || findByCodeAndDate[0].codeDate < data.hour){
            throw new HttpException('Código inválido, ou inspirado!!', HttpStatus.BAD_REQUEST);
        };

        return { code:true, token:generateToken({ id:findByCodeAndDate[0].id })};
    }
};

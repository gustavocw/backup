import { Injectable } from "@nestjs/common";
import { Escort } from "@prisma/client";
import { PrismaService } from "src/database";
import { IBySexDTO } from "src/useCases/findBySex/FindBySex.DTO";
import { ABySex } from "../IFindBySex.account";

@Injectable()
export class FindBySexImplementation implements ABySex {
    constructor(
        private prisma:PrismaService,
    ){};

    async findBySex(data: IBySexDTO): Promise<Escort[]> {
        const search = await this.prisma.escort.findMany({
            where:{ sexo:data.sexo },
            include: { 
                dataEscort:true,
                imagesEscort:true,
            },
        });
        return search;
    };
};

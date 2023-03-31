import { Injectable } from "@nestjs/common";
import { Escort } from "@prisma/client";
import { PrismaService } from "src/database";
import { AListAll } from "../IListAllDetails.account";

@Injectable()
export class ListDetailsOfEscortImplementation implements AListAll{
    constructor(
        private prisma:PrismaService,
    ){};

    async findAllEscorts(): Promise<Escort[]> {
        const findAllEscortsWithDetails = await this.prisma.escort.findMany({
            include: { 
                dataEscort:true, 
                imagesEscort:true,
            },
        });
        return findAllEscortsWithDetails;
    };
};

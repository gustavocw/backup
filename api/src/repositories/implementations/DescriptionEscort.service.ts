import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database';
import { IDescriptionEscortDTO } from 'src/useCases/createDescriptionEscort/DescriptionEscort.DTO';
import { ADescription } from '../IDescription.account'

@Injectable()
export class DescriptionEscortImplementation implements ADescription {
    constructor(
        private prisma:PrismaService,
    ){};

    async createDescription({ 
        age, 
        contact, 
        description, 
        tatoo, 
        eyes, 
        piercing,
        price,
        type,
        userId,
        weight,
        height,
        obsScheduling,
    }: IDescriptionEscortDTO): Promise<void> {
        const createDescription = await this.prisma.escort.update({
            where: { id:userId },
            data:{
                dataEscort:{
                    create:{
                        age,
                        contact,
                        description,
                        tatoo,
                        eyes,
                        piercing,
                        price,
                        type,
                        weight,
                        height,
                        obsScheduling,
                    },
                },
            },
    });
    };
};

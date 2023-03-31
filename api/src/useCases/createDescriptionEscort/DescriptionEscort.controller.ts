import { Body, Controller, Post, Request } from "@nestjs/common";
import { IDescriptionEscortDTO } from "./DescriptionEscort.DTO";
import { CreateDescriptionService } from "./DescriptionEscort.service";
import { CustomRequest } from '../../interfaces/Request.interface';

@Controller('description')
export class DescriptionController {
    constructor(
        private descriptionService:CreateDescriptionService,
        ){};

    @Post('create')
    async handle_createDescription(@Body() body:IDescriptionEscortDTO, @Request() req:CustomRequest){
        try {
            const savedDescriptionEscort = await this.descriptionService.createDescriptionEscort(
                {
                    userId:req.userId, 
                    age:body.age,
                    contact:body.contact,
                    description:body.description,
                    tatoo:body.tatoo,
                    eyes:body.eyes,
                    piercing:body.piercing,
                    price:body.price,
                    type:body.type,
                    weight:body.weight,
                    height:body.height,
                    obsScheduling:body.obsScheduling,
                });
            return { description:true };
        } catch (error) {
            return error;
        };
    };
};

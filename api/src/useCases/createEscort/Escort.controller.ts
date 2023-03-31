import { Body, Controller, Get, Post } from "@nestjs/common";
import { response } from "express";
import { IEscortDTO } from "./Escort.DTO";
import { EscortService } from "./Escort.service";

@Controller('escort')
export class EscortController{
    constructor(
        private EscortService:EscortService,
    ){};

    @Post('create')
    CreateEscort(@Body() body:IEscortDTO){
        try {
            return this.EscortService.RegisterEscort(body);
        } catch (error) {
            return response.json({ error:true, message: `${error}`});
        };
    }
};

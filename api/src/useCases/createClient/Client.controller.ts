import { Body, Controller, Get, Post } from "@nestjs/common";
import { request, response } from "express";
import { IDataForClient } from "./Client.DTO";
import { ClientService } from "./Client.service";

@Controller('client')
export class ClientController{
    constructor(
        private clientRegisterService:ClientService,
    ){};

    @Post('create')
    CreateClientController(@Body() body:IDataForClient){
        try {
            console.log("FOI")
            return this.clientRegisterService.RegisterClient(body);
        } catch (error) {
            return response.json({ error:true, message: `${error}`});
        };
    };
};

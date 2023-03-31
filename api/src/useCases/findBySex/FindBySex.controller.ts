import { Body, Controller, Post } from "@nestjs/common";
import { IBySexDTO } from "./FindBySex.DTO";
import { FindBySexService } from "./FindBySex.service";

@Controller('escort')
export class lisBySexController {
    constructor(
        private readonly listBySexService:FindBySexService,
    ){};

    @Post('sex')
    async handle_search(@Body() body:IBySexDTO){
        try {
            const selected = await this.listBySexService.select_by_sex(body);
            return selected;
        } catch (error) {
            return error;
        };
    };
};

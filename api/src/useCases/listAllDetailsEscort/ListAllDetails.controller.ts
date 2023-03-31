import { Controller, Get } from "@nestjs/common";
import { ListAllDetailsOfEscortService } from "./ListAllDetails.service";

@Controller()
export class EscortListController {
    constructor(
        private readonly listEscortService:ListAllDetailsOfEscortService,
    ){};

    @Get()
    async finder(){
        try {
            const searched = await this.listEscortService.select_all();
            return searched;
        } catch (error) {
            return error;
        };
    };
};

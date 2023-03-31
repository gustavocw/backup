import { Module } from "@nestjs/common";
import { PrismaService } from "src/database";
import { FindBySexImplementation } from "src/repositories/implementations/FindBySex.service";
import { lisBySexController } from "./FindBySex.controller";
import { FindBySexService } from "./FindBySex.service";

@Module({
    imports: [],
    controllers: [lisBySexController],
    providers: [
        PrismaService,
        FindBySexImplementation,
        FindBySexService,
    ]
})
export class FindBySexModule {};

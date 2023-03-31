import { Module } from "@nestjs/common";
import { PrismaService } from "src/database";
import { ValidateImplementation } from "src/repositories/implementations/Validate.service";
import { ValidateController } from "./Validate.controller";
import { ValidateService } from "./Validate.service";

@Module({
    imports: [],
    controllers: [ValidateController],
    providers: [
        PrismaService,
        ValidateImplementation,
        ValidateService,
    ]
})
export class ValidateCodeModule{};

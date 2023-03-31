import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PrismaService } from "src/database";
import { isEscort } from "src/middlewares/isEscort.middleware";
import { token_middleware } from "src/middlewares/jwt.middleware";
import { DescriptionEscortImplementation } from "src/repositories/implementations/DescriptionEscort.service";
import { DescriptionController } from "./DescriptionEscort.controller";
import { CreateDescriptionService } from "./DescriptionEscort.service";

@Module({
    imports: [],
    controllers: [DescriptionController],
    providers: [
        PrismaService,
        CreateDescriptionService,
        DescriptionEscortImplementation,
        token_middleware,
        isEscort,
    ],
})
export class DescriptionModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer 
        .apply(token_middleware, isEscort)
        .forRoutes('description/create')
    };
  };

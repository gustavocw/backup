import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import multer from "multer";
import { PrismaService } from "src/database";
import { isEscort } from "src/middlewares/isEscort.middleware";
import { token_middleware } from "src/middlewares/jwt.middleware";
import { UploadEscortImplementations } from "src/repositories/implementations/UploadEscort.service";
import configsMulter from '../../middlewares/upload.middleware';
import { UploadEscortController } from "./UploadImage.controller";
import { UploadEscortService } from "./UploadImage.service";
@Module({
    imports: [
      MulterModule.registerAsync({
        useFactory: () => (configsMulter)
      })
    ],
    controllers: [UploadEscortController],
    providers: [
        PrismaService,
        UploadEscortService,
        UploadEscortImplementations,
        token_middleware,
        isEscort,
        MulterModule,
    ],
})
export class UploadEscortModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer 
      .apply(token_middleware, isEscort)
      .forRoutes('upload/images')
  };
};;

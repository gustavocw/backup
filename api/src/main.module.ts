import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { token_middleware } from './middlewares/jwt.middleware';
import { ClientModule } from './useCases/createClient/Client.module';
import { DescriptionModule } from './useCases/createDescriptionEscort/DescriptionEscort.module';
import { EscortRegisterModule } from './useCases/createEscort/Escort.module';
import { FindBySexModule } from './useCases/findBySex/FindBySex.module';
import { ListAllEscortModule } from './useCases/listAllDetailsEscort/ListAllDetails.module';
import { LoginClientModule } from './useCases/loginClient/LoginClient.module';
import { EscortLoginModule } from './useCases/loginEscort/LoginEscort.module';
import { RecoverModule } from './useCases/recoverPass/RecoverPass.module';
import { UploadEscortModule } from './useCases/UploadEscort/UploadImage.module';
import { ValidateCodeModule } from './useCases/validateAllCode/Validate.module';

@Module({
  imports: [
    ClientModule, 
    LoginClientModule,
    EscortRegisterModule,
    EscortLoginModule,
    ValidateCodeModule,
    RecoverModule,
    DescriptionModule,
    UploadEscortModule,
    ListAllEscortModule,
    FindBySexModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule{};

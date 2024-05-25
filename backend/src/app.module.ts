import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { PayableController } from './integrations/payable/payable.controller';
import { PayableService } from './integrations/payable/payable.service';
import { AssignorController } from './integrations/assignor/assignor.controller';
import { AssignorService } from './integrations/assignor/assignor.service';
import { AuthController } from './integrations/auth/auth.controller';
import { AuthService } from './integrations/auth/auth.service';
import { PrismaModule } from './database/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  controllers: [PayableController, AssignorController, AuthController],
  providers: [
    PrismaService,
    PayableService,
    AssignorService,
    AuthService,
    JwtService,
  ],
})
export class AppModule {}

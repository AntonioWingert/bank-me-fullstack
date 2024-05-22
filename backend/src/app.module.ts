import { Module } from '@nestjs/common';
import { IntegrationController } from './integrations/integration.controller';
import { IntegrationsService } from './integrations/integrations.service';
import { PrismaService } from './database/prisma.service';

@Module({
  controllers: [IntegrationController],
  providers: [IntegrationsService, PrismaService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { IntegrationController } from './integration.controller';
import { IntegrationsService } from './integrations.service';

@Module({
  controllers: [IntegrationController],
  providers: [IntegrationsService],
})
export class IntegrationsModule {}

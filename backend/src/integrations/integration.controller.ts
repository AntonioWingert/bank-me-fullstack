import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PayableBody } from '../dtos/payable-body';
import { IntegrationsService } from './integrations.service';

@Controller('integration')
export class IntegrationController {
  constructor(private integrationService: IntegrationsService) {}

  @Post('payable')
  async createIntegration(@Body() payable: PayableBody) {
    return this.integrationService.createPayable(payable);
  }

  @Get('payable/:id')
  async getPayable(@Param() params: { id: string }) {
    return this.integrationService.getPayable(params.id);
  }

  @Get('assignor/:id')
  async getAssignor(@Param() params: { id: string }) {
    this.integrationService.getAssignor(params.id);
  }

  @Put('payable/:id')
  async updatePayable(@Param() params: { id: string }) {
    this.integrationService.updatePayable(params.id);
  }

  @Put('assignor/:id')
  async updateAssignor(@Param() params: { id: string }) {
    this.integrationService.updateAssignor(params.id);
  }

  @Delete('payable/:id')
  async deletePayable(@Param() params: { id: string }) {
    this.integrationService.deletePayable(params.id);
  }

  @Delete('assignor/:id')
  async deleteAssignor(@Param() params: { id: string }) {
    this.integrationService.deleteAssignor(params.id);
  }
}

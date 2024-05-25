import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PayableService } from './payable.service';
import { UpdatePayableBody } from 'src/dtos/update-payable-body';
import { CreatePayableBody } from 'src/dtos/create-payable-body';
import { AuthGuard } from '../auth/auth.guard';

@Controller('integration')
export class PayableController {
  constructor(private payableService: PayableService) {}

  @UseGuards(AuthGuard)
  @Post('payable')
  async createIntegration(@Body() payable: CreatePayableBody) {
    return this.payableService.createPayable(payable);
  }

  @UseGuards(AuthGuard)
  @Get('payable/:id')
  async getPayable(@Param() params: { id: string }) {
    return this.payableService.getPayable(params.id);
  }

  @UseGuards(AuthGuard)
  @Put('payable/:id')
  async updatePayable(
    @Param() params: { id: string },
    @Body() payable: UpdatePayableBody,
  ) {
    const id = params.id;
    return this.payableService.updatePayable({ id, payable });
  }

  @UseGuards(AuthGuard)
  @Delete('payable/:id')
  async deletePayable(@Param() params: { id: string }) {
    return this.payableService.deletePayable(params.id);
  }
}

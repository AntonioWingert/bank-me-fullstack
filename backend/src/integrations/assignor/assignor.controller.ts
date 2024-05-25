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
import { AssignorService } from './assignor.service';
import { CreateAssignorBody } from 'src/dtos/create-assignor-body';
import { UpdateAssignorBody } from 'src/dtos/update-assignor-body';
import { AuthGuard } from '../auth/auth.guard';

@Controller('integration')
export class AssignorController {
  constructor(private assignorService: AssignorService) {}

  @UseGuards(AuthGuard)
  @Post('assignor')
  async createAssignor(@Body() assignor: CreateAssignorBody) {
    return this.assignorService.createAssignor(assignor);
  }

  @UseGuards(AuthGuard)
  @Get('assignor/:id')
  async getAssignor(@Param() params: { id: string }) {
    return this.assignorService.getAssignor(params.id);
  }

  @UseGuards(AuthGuard)
  @Put('assignor/:id')
  async updateAssignor(
    @Param() params: { id: string },
    @Body() assignor: UpdateAssignorBody,
  ) {
    const id = params.id;
    return this.assignorService.updateAssignor({ id, assignor });
  }

  @UseGuards(AuthGuard)
  @Delete('assignor/:id')
  async deleteAssignor(@Param() params: { id: string }) {
    return this.assignorService.deleteAssignor(params.id);
  }
}

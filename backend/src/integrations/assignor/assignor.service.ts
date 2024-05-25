import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAssignorBody } from 'src/dtos/create-assignor-body';
import { UpdateAssignorBody } from 'src/dtos/update-assignor-body';

@Injectable()
export class AssignorService {
  constructor(private prisma: PrismaService) {}

  async createAssignor(assignor: CreateAssignorBody) {
    return await this.prisma.assignor.create({
      data: {
        assignor: assignor.assignor,
        emissionDate: assignor.emissionDate,
        value: assignor.value,
        id: randomUUID(),
      },
    });
  }

  async getAssignor(id: string) {
    return await this.prisma.assignor.findUnique({
      where: {
        id,
      },
    });
  }

  async updateAssignor({
    id,
    assignor,
  }: {
    id: string;
    assignor: UpdateAssignorBody;
  }) {
    return await this.prisma.assignor.update({
      where: {
        id,
      },
      data: {
        id,
        ...assignor,
      },
    });
  }

  async deleteAssignor(id: string) {
    return await this.prisma.assignor.delete({
      where: {
        id,
      },
    });
  }
}

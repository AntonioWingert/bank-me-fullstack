import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { PayableBody } from 'src/dtos/payable-body';

@Injectable()
export class IntegrationsService {
  constructor(private prisma: PrismaService) {}
  async createPayable(payable: PayableBody) {
    return await this.prisma.payable.create({
      data: {
        document: payable.document,
        email: payable.email,
        name: payable.name,
        phone: payable.phone,
        id: randomUUID(),
      },
    });
  }

  async getPayable(id: string) {
    return await this.prisma.payable.findUnique({
      where: {
        id,
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

  async updatePayable(id: string) {
    return await this.prisma.payable.update({
      where: {
        id,
      },
      data: {},
    });
  }

  async updateAssignor(id: string) {
    return await this.prisma.assignor.update({
      where: {
        id,
      },
      data: {},
    });
  }

  async deletePayable(id: string) {
    return await this.prisma.payable.delete({
      where: {
        id,
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

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePayableBody } from 'src/dtos/create-payable-body';
import { UpdatePayableBody } from 'src/dtos/update-payable-body';

@Injectable()
export class PayableService {
  constructor(private prisma: PrismaService) {}
  async createPayable(payable: CreatePayableBody) {
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

  async updatePayable({
    id,
    payable,
  }: {
    id: string;
    payable: UpdatePayableBody;
  }) {
    return await this.prisma.payable.update({
      where: {
        id,
      },
      data: {
        id,
        ...payable,
      },
    });
  }

  async deletePayable(id: string) {
    return await this.prisma.payable.delete({
      where: {
        id,
      },
    });
  }
}

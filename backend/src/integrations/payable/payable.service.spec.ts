import { CreatePayableBody } from 'src/dtos/create-payable-body';
import { PayableService } from './payable.service';
import { PrismaService } from 'src/database/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePayableBody } from 'src/dtos/update-payable-body';

const fakeCreatePayable: CreatePayableBody = {
  document: '123456789',
  email: 'fake@email.com',
  name: 'Fake Name',
  phone: '123456789',
};

const fakeUpdatedPayable: UpdatePayableBody = {
  document: '987654321',
  email: 'fake-updated-email.com',
  name: 'Fake Updated Name',
  phone: '987654321',
};

const prismaMock = {
  payable: {
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findUnique: jest.fn(),
  },
};

describe('PayableService', () => {
  let service: PayableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PayableService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<PayableService>(PayableService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a payable', async () => {
    prismaMock.payable.create.mockResolvedValue(fakeCreatePayable);
    const result = await service.createPayable(fakeCreatePayable);
    expect(result).toEqual(fakeCreatePayable);
  });

  it('not should create a payable', async () => {
    prismaMock.payable.create.mockRejectedValue(new Error());
    await expect(service.createPayable(fakeCreatePayable)).rejects.toThrow();
  });

  it('should get a payable', async () => {
    prismaMock.payable.findUnique.mockResolvedValue(fakeCreatePayable);
    const result = await service.getPayable('123456789');
    expect(result).toEqual(fakeCreatePayable);
  });

  it('should update a payable', async () => {
    prismaMock.payable.update.mockResolvedValue(fakeUpdatedPayable);
    const result = await service.updatePayable({
      id: '123456789',
      payable: fakeUpdatedPayable,
    });
    expect(result).toEqual(fakeUpdatedPayable);
  });

  it('not should update a payable', async () => {
    prismaMock.payable.update.mockRejectedValue(new Error());
    await expect(
      service.updatePayable({
        id: '123456789',
        payable: fakeUpdatedPayable,
      }),
    ).rejects.toThrow();
  });

  it('should delete a payable', async () => {
    prismaMock.payable.delete.mockResolvedValue(fakeUpdatedPayable);
    const result = await service.deletePayable('123456789');
    expect(result).toEqual(fakeUpdatedPayable);
  });

  it('not should delete a payable', async () => {
    prismaMock.payable.delete.mockRejectedValue(new Error());
    await expect(service.deletePayable('123456789')).rejects.toThrow();
  });
});

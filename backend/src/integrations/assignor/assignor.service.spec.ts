import { PrismaService } from 'src/database/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateAssignorBody } from 'src/dtos/create-assignor-body';
import { UpdateAssignorBody } from 'src/dtos/update-assignor-body';
import { AssignorService } from './assignor.service';

const fakeCreateAssignor: CreateAssignorBody = {
  assignor: 'Fake Assignor',
  emissionDate: new Date(),
  value: 100,
};

const fakeUpdatedAssignor: UpdateAssignorBody = {
  assignor: 'Fake Updated Assignor',
  emissionDate: new Date(),
  value: 200,
};

const prismaMock = {
  assignor: {
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findUnique: jest.fn(),
  },
};

describe('AssignorService', () => {
  let service: AssignorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AssignorService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<AssignorService>(AssignorService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a assignor', async () => {
    prismaMock.assignor.create.mockResolvedValue(fakeCreateAssignor);
    const result = await service.createAssignor(fakeCreateAssignor);
    expect(result).toEqual(fakeCreateAssignor);
  });

  it('not should create a assignor', async () => {
    prismaMock.assignor.create.mockRejectedValue(new Error());
    await expect(service.createAssignor(fakeCreateAssignor)).rejects.toThrow();
  });

  it('should get a assignor', async () => {
    prismaMock.assignor.findUnique.mockResolvedValue(fakeCreateAssignor);
    const result = await service.getAssignor('1');
    expect(result).toEqual(fakeCreateAssignor);
  });

  it('should update a assignor', async () => {
    prismaMock.assignor.update.mockResolvedValue(fakeUpdatedAssignor);
    const result = await service.updateAssignor({
      id: '1',
      assignor: fakeUpdatedAssignor,
    });
    expect(result).toEqual(fakeUpdatedAssignor);
  });

  it('not should update a assignor', async () => {
    prismaMock.assignor.update.mockRejectedValue(new Error());
    await expect(
      service.updateAssignor({ id: '1', assignor: fakeUpdatedAssignor }),
    ).rejects.toThrow();
  });

  it('should delete a assignor', async () => {
    prismaMock.assignor.delete.mockResolvedValue(fakeCreateAssignor);
    const result = await service.deleteAssignor('1');
    expect(result).toEqual(fakeCreateAssignor);
  });

  it('not should delete a assignor', async () => {
    prismaMock.assignor.delete.mockRejectedValue(new Error());
    await expect(service.deleteAssignor('1')).rejects.toThrow();
  });
});

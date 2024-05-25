import { Test, TestingModule } from '@nestjs/testing';
import { CreateAssignorBody } from 'src/dtos/create-assignor-body';
import { UpdateAssignorBody } from 'src/dtos/update-assignor-body';
import { AssignorService } from './assignor.service';
import { AssignorController } from './assignor.controller';
import { randomUUID } from 'crypto';

const fakeCreateAssignor: CreateAssignorBody = {
  assignor: randomUUID(),
  emissionDate: new Date(),
  value: 100,
};

const fakeUpdatedAssignor: UpdateAssignorBody = {
  assignor: randomUUID(),
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
  let controller: AssignorController;
  let service: AssignorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignorController],
      providers: [
        AssignorService,
        { provide: AssignorService, useValue: prismaMock },
      ],
    }).compile();

    controller = module.get<AssignorController>(AssignorController);
    service = module.get<AssignorService>(AssignorService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new assignor', async () => {
    await controller.createAssignor(fakeCreateAssignor);
    expect(prismaMock.assignor.create).toHaveBeenCalledTimes(1);
  });

  it('should update an assignor', async () => {
    await controller.updateAssignor({ id: '1' }, fakeUpdatedAssignor);
    expect(prismaMock.assignor.update).toHaveBeenCalledTimes(1);
  });

  it('should delete an assignor', async () => {
    await controller.deleteAssignor({ id: '1' });
    expect(prismaMock.assignor.delete).toHaveBeenCalledTimes(1);
  });

  it('should get an assignor', async () => {
    await controller.getAssignor({ id: '1' });
    expect(prismaMock.assignor.findUnique).toHaveBeenCalledTimes(1);
  });
});

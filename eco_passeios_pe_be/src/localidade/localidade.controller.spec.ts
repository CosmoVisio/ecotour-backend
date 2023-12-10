import { Test, TestingModule } from '@nestjs/testing';
import { LocalidadeController } from './localidade.controller';

describe('LocalidadeController', () => {
  let controller: LocalidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalidadeController],
    }).compile();

    controller = module.get<LocalidadeController>(LocalidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

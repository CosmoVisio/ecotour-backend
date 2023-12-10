import { Test, TestingModule } from '@nestjs/testing';
import { GuiasController } from './guias.controller';

describe('GuiasController', () => {
  let controller: GuiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuiasController],
    }).compile();

    controller = module.get<GuiasController>(GuiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

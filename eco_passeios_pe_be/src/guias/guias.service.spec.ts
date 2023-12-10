import { Test, TestingModule } from '@nestjs/testing';
import { GuiasService } from './guias.service';

describe('GuiasService', () => {
  let service: GuiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuiasService],
    }).compile();

    service = module.get<GuiasService>(GuiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

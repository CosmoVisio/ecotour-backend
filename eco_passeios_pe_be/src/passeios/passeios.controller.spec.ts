import { Test, TestingModule } from '@nestjs/testing';
import { PasseiosController } from './passeios.controller';

describe('PasseiosController', () => {
  let controller: PasseiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasseiosController],
    }).compile();

    controller = module.get<PasseiosController>(PasseiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

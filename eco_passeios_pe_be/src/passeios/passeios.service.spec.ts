import { Test, TestingModule } from '@nestjs/testing';
import { PasseiosService } from './passeios.service';

describe('PasseiosService', () => {
  let service: PasseiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasseiosService],
    }).compile();

    service = module.get<PasseiosService>(PasseiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

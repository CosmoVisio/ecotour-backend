import { Test, TestingModule } from '@nestjs/testing';
import { TourGuideService } from './tour-guide.service';

describe('TourGuideService', () => {
  let service: TourGuideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourGuideService],
    }).compile();

    service = module.get<TourGuideService>(TourGuideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

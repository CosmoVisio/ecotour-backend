import { Test, TestingModule } from '@nestjs/testing';
import { TourGuideController } from './tour-guide.controller';
import { TourGuideService } from './tour-guide.service';

describe('TourGuideController', () => {
  let controller: TourGuideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourGuideController],
      providers: [TourGuideService],
    }).compile();

    controller = module.get<TourGuideController>(TourGuideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { TourGuideService } from './tour-guide.service';
import { TourGuideController } from './tour-guide.controller';

@Module({
  controllers: [TourGuideController],
  providers: [TourGuideService],
})
export class TourGuideModule {}

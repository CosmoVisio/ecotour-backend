import { Injectable } from '@nestjs/common';
import { CreateTourGuideDto } from './dto/create-tour-guide.dto';
import { UpdateTourGuideDto } from './dto/update-tour-guide.dto';

@Injectable()
export class TourGuideService {
  create(createTourGuideDto: CreateTourGuideDto) {
    return 'This action adds a new tourGuide';
  }

  findAll() {
    return `This action returns all tourGuide`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tourGuide`;
  }

  update(id: number, updateTourGuideDto: UpdateTourGuideDto) {
    return `This action updates a #${id} tourGuide`;
  }

  remove(id: number) {
    return `This action removes a #${id} tourGuide`;
  }
}

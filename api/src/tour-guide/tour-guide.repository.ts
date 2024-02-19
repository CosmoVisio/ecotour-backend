// tour-guide.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  TourGuide,
  TourGuideDocument,
} from './interfaces/tour-guide.interface';
import { CreateTourGuideDto } from './dto/create-tour-guide.dto';

@Injectable()
export class TourGuideRepository {
  constructor(
    @InjectModel(TourGuide.name)
    private readonly tourGuideModel: Model<TourGuideDocument>,
  ) {}

  async create(
    createTourGuideDto: CreateTourGuideDto,
  ): Promise<TourGuideDocument> {
    const createdTourGuide = new this.tourGuideModel(createTourGuideDto);
    return createdTourGuide.save();
  }

  async findAll(): Promise<TourGuideDocument[]> {
    return this.tourGuideModel.find().exec();
  }

  async findById(id: string): Promise<TourGuideDocument> {
    return this.tourGuideModel.findById(id).exec();
  }

  async update(
    id: string,
    updateTourGuideDto: Partial<CreateTourGuideDto>,
  ): Promise<TourGuideDocument> {
    await this.tourGuideModel.updateOne({ _id: id }, updateTourGuideDto).exec();
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.tourGuideModel.deleteOne({ _id: id }).exec();
  }
}

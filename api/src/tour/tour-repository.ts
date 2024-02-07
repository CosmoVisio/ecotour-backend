// tour.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tour, TourDocument } from './interfaces/tour.interface';
import { CreateTourDto } from './dto/create-tour.dto';

@Injectable()
export class TourRepository {
  constructor(
    @InjectModel(Tour.name) private readonly tourModel: Model<TourDocument>,
  ) {}

  async create(createTourDto: CreateTourDto): Promise<TourDocument> {
    const createdTour = new this.tourModel(createTourDto);
    return createdTour.save();
  }

  async findAll(): Promise<TourDocument[]> {
    return this.tourModel.find().exec();
  }

  async findById(id: string): Promise<TourDocument> {
    return this.tourModel.findById(id).exec();
  }

  async update(
    id: string,
    updateTourDto: Partial<CreateTourDto>,
  ): Promise<TourDocument> {
    await this.tourModel.updateOne({ _id: id }, updateTourDto).exec();
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.tourModel.deleteOne({ _id: id }).exec();
  }
}

// review.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './interfaces/review.interface';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewRepository {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<ReviewDocument> {
    const createdReview = new this.reviewModel(createReviewDto);
    return createdReview.save();
  }

  async findAll(): Promise<ReviewDocument[]> {
    return this.reviewModel.find().exec();
  }

  async findById(id: string): Promise<ReviewDocument> {
    return this.reviewModel.findById(id).exec();
  }

  async update(
    id: string,
    updateReviewDto: Partial<CreateReviewDto>,
  ): Promise<ReviewDocument> {
    await this.reviewModel.updateOne({ _id: id }, updateReviewDto).exec();
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.reviewModel.deleteOne({ _id: id }).exec();
  }
}

// category.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './interfaces/category.interface';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryDocument> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll(): Promise<CategoryDocument[]> {
    return this.categoryModel.find().exec();
  }

  async findById(id: string): Promise<CategoryDocument> {
    return this.categoryModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCategoryDto: Partial<CreateCategoryDto>,
  ): Promise<CategoryDocument> {
    await this.categoryModel.updateOne({ _id: id }, updateCategoryDto).exec();
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.categoryModel.deleteOne({ _id: id }).exec();
  }
}

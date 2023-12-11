import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewService {
    create(createReviewDto: CreateReviewDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReviewDto: UpdateReviewDto): string;
    remove(id: number): string;
}

import { CreateTourGuideDto } from './dto/create-tour-guide.dto';
import { UpdateTourGuideDto } from './dto/update-tour-guide.dto';
export declare class TourGuideService {
    create(createTourGuideDto: CreateTourGuideDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTourGuideDto: UpdateTourGuideDto): string;
    remove(id: number): string;
}

import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
export declare class TourService {
    create(createTourDto: CreateTourDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTourDto: UpdateTourDto): string;
    remove(id: number): string;
}

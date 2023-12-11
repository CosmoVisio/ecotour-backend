import { TourGuideService } from './tour-guide.service';
import { CreateTourGuideDto } from './dto/create-tour-guide.dto';
import { UpdateTourGuideDto } from './dto/update-tour-guide.dto';
export declare class TourGuideController {
    private readonly tourGuideService;
    constructor(tourGuideService: TourGuideService);
    create(createTourGuideDto: CreateTourGuideDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTourGuideDto: UpdateTourGuideDto): string;
    remove(id: string): string;
}

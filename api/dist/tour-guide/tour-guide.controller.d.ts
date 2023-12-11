import { TourGuideService } from './tour-guide.service';
import { CreateTourGuideDto } from './dto/create-tour-guide.dto';
import { UpdateTourGuideDto } from './dto/update-tour-guide.dto';
export declare class TourGuideController {
    private readonly tourGuideService;
    constructor(tourGuideService: TourGuideService);
    create(createTourGuideDto: CreateTourGuideDto): {
        message: string;
        data: {
            id: number;
            name: string;
            bio: string;
        };
    };
    findAll(): {
        id: number;
        name: string;
        bio: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        bio: string;
    };
    update(id: string, updateTourGuideDto: UpdateTourGuideDto): {
        message: string;
        data: {
            id: number;
            name: string;
            bio: string;
        };
    };
    remove(id: string): {
        message: string;
        id: number;
    };
}

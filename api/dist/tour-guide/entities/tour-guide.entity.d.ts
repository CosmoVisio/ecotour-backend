import { Tour } from 'src/tour/entities/tour.entity';
export declare class TourGuide {
    id: string;
    name: string;
    bio: string;
    specializations: string[];
    rating: number;
    contact: string;
    tours: Tour[];
}

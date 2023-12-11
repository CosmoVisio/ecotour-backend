import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Review } from 'src/review/entities/review.entity';
import { TourGuide } from 'src/tour-guide/entities/tour-guide.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Tour {
    id: string;
    title: string;
    description: string;
    category: string;
    location: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    environmentalInformation: string;
    sustainabilityPolicies: string;
    minimalEnvironmentalImpact: string;
    requiredEquipment: string;
    safetyInstructions: string;
    images: string[];
    price: number;
    duration: number;
    guide: TourGuide;
    clients: User[];
    reviews: Review[];
    reservations: Reservation[];
}

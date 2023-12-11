import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Review } from 'src/review/entities/review.entity';
import { Tour } from 'src/tour/entities/tour.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    reservations: Reservation[];
    tours: Tour[];
    reviews: Review[];
}

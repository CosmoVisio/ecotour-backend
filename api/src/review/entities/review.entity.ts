import { TourGuide } from 'src/tour-guide/entities/tour-guide.entity';
import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';

export class Review {
  id: string;
  user: User;
  tour?: Tour;
  tourGuide?: TourGuide;
  rating: number;
  comment: string;
}

import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';

export class Reservation {
  id: string;
  user: User;
  tour: Tour;
  reservationDate: Date;
  status: string;
  paymentDetails: string;
}

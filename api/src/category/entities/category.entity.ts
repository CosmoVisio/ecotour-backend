import { Tour } from 'src/tour/entities/tour.entity';

export class Category {
  id: string;
  name: string;
  description: string;
  tours?: Tour[];
  createdAt: Date;
  updatedAt: Date;
}

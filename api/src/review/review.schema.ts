import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tour } from '../tour/entities/tour.entity';
import { TourGuide } from '../tour-guide/entities/tour-guide.entity';
import { User } from '../user/entities/user.entity';

@Schema()
export class Review extends Document {
  @Prop({ required: true })
  user: User;

  @Prop({ type: Tour })
  tour?: Tour;

  @Prop({ type: TourGuide })
  tourGuide?: TourGuide;

  @Prop({ required: true })
  rating: number;

  @Prop({ default: '' })
  comment: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);

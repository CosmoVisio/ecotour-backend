import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tour } from '../tour/entities/tour.entity';

@Schema()
export class TourGuide extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: '' })
  bio: string;

  @Prop({ type: [String], default: [] })
  specializations: string[];

  @Prop({ default: 0 })
  rating: number;

  @Prop({ required: true })
  contact: string;

  @Prop({ type: [{ type: [Tour] }] })
  tours: Tour[];
}

export const TourGuideSchema = SchemaFactory.createForClass(TourGuide);

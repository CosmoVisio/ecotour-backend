import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tour } from '../tour/entities/tour.entity';
import { User } from '../user/entities/user.entity';

@Schema()
export class Reservation extends Document {
  @Prop({ required: true })
  user: User;

  @Prop({ required: true })
  tour: Tour;

  @Prop({ required: true })
  reservationDate: Date;

  @Prop({ default: '' })
  status: string;

  @Prop({ default: '' })
  paymentDetails: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);

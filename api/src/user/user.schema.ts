import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Reservation } from '../reservation/entities/reservation.entity';
import { Review } from '../review/entities/review.entity';
import { Tour } from '../tour/entities/tour.entity';
import * as bcrypt from 'bcrypt';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ default: '' })
  firstName: string;

  @Prop({ default: '' })
  lastName: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ enum: ['user', 'admin'], default: 'user' })
  role: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: [{ type: [Reservation] }] })
  reservations: Reservation[];

  @Prop({ type: [{ type: [Tour] }] })
  tours: Tour[];

  @Prop({ type: [{ type: [Review] }] })
  reviews: Review[];

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

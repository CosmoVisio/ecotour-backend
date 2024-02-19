// reservation.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Reservation,
  ReservationDocument,
} from './interfaces/reservation.interface';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationRepository {
  constructor(
    @InjectModel(Reservation.name)
    private readonly reservationModel: Model<ReservationDocument>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<ReservationDocument> {
    const createdReservation = new this.reservationModel(createReservationDto);
    return createdReservation.save();
  }

  async findAll(): Promise<ReservationDocument[]> {
    return this.reservationModel.find().exec();
  }

  async findById(id: string): Promise<ReservationDocument> {
    return this.reservationModel.findById(id).exec();
  }

  async update(
    id: string,
    updateReservationDto: Partial<CreateReservationDto>,
  ): Promise<ReservationDocument> {
    await this.reservationModel
      .updateOne({ _id: id }, updateReservationDto)
      .exec();
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.reservationModel.deleteOne({ _id: id }).exec();
  }
}

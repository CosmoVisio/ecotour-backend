import { PartialType } from '@nestjs/mapped-types';
import { CreateTourGuideDto } from './create-tour-guide.dto';

export class UpdateTourGuideDto extends PartialType(CreateTourGuideDto) {}

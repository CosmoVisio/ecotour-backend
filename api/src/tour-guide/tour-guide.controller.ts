import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TourGuideService } from './tour-guide.service';
import { CreateTourGuideDto } from './dto/create-tour-guide.dto';
import { UpdateTourGuideDto } from './dto/update-tour-guide.dto';

@Controller('tour-guide')
export class TourGuideController {
  constructor(private readonly tourGuideService: TourGuideService) {}

  @Post()
  create(@Body() createTourGuideDto: CreateTourGuideDto) {
    return this.tourGuideService.create(createTourGuideDto);
  }

  @Get()
  findAll() {
    return this.tourGuideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tourGuideService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTourGuideDto: UpdateTourGuideDto) {
    return this.tourGuideService.update(+id, updateTourGuideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tourGuideService.remove(+id);
  }
}

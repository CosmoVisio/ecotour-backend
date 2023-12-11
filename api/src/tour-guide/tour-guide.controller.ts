import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TourGuideService } from './tour-guide.service';
import { CreateTourGuideDto } from './dto/create-tour-guide.dto';
import { UpdateTourGuideDto } from './dto/update-tour-guide.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiBody,
  ApiOperation,
  ApiNoContentResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@Controller('tour-guide')
@ApiTags('Tour Guide')
export class TourGuideController {
  constructor(private readonly tourGuideService: TourGuideService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tour guide' })
  @ApiCreatedResponse({
    description: 'The tour guide has been successfully created.',
    type: CreateTourGuideDto,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  create(@Body() createTourGuideDto: CreateTourGuideDto) {
    // Mocked response
    return {
      message: 'Tour guide created successfully',
      data: {
        id: 1,
        name: createTourGuideDto.name,
        bio: createTourGuideDto.bio,
        // other fields
      },
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all tour guides' })
  @ApiOkResponse({
    description: 'List of all tour guides.',
    type: [CreateTourGuideDto],
  })
  findAll() {
    // Mocked response
    return [
      {
        id: 1,
        name: 'John Doe',
        bio: 'Passionate about guiding people through adventures.',
        // other fields
      },
      {
        id: 2,
        name: 'Jane Smith',
        bio: 'Experienced in leading nature excursions.',
        // other fields
      },
      // other tour guides
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tour guide by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Tour Guide ID' })
  @ApiOkResponse({
    description: 'The tour guide has been successfully retrieved.',
    type: CreateTourGuideDto,
  })
  @ApiNotFoundResponse({ description: 'Tour guide not found' })
  findOne(@Param('id') id: string) {
    // Mocked response
    return {
      id: +id,
      name: 'John Doe',
      bio: 'Passionate about guiding people through adventures.',
      // other fields
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update tour guide by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Tour Guide ID' })
  @ApiBody({ type: UpdateTourGuideDto })
  @ApiOkResponse({
    description: 'The tour guide has been successfully updated.',
    type: UpdateTourGuideDto,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({ description: 'Tour guide not found' })
  update(
    @Param('id') id: string,
    @Body() updateTourGuideDto: UpdateTourGuideDto,
  ) {
    // Mocked response
    return {
      message: 'Tour guide updated successfully',
      data: {
        id: +id,
        name: updateTourGuideDto.name,
        bio: updateTourGuideDto.bio,
        // other fields
      },
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete tour guide by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Tour Guide ID' })
  @ApiNoContentResponse({
    description: 'The tour guide has been successfully deleted.',
  })
  @ApiNotFoundResponse({ description: 'Tour guide not found' })
  remove(@Param('id') id: string) {
    // Mocked response
    return {
      message: 'Tour guide deleted successfully',
      id: +id,
    };
  }
}

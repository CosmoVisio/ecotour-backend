"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourGuideController = void 0;
const common_1 = require("@nestjs/common");
const tour_guide_service_1 = require("./tour-guide.service");
const create_tour_guide_dto_1 = require("./dto/create-tour-guide.dto");
const update_tour_guide_dto_1 = require("./dto/update-tour-guide.dto");
const swagger_1 = require("@nestjs/swagger");
let TourGuideController = class TourGuideController {
    constructor(tourGuideService) {
        this.tourGuideService = tourGuideService;
    }
    create(createTourGuideDto) {
        return {
            message: 'Tour guide created successfully',
            data: {
                id: 1,
                name: createTourGuideDto.name,
                bio: createTourGuideDto.bio,
            },
        };
    }
    findAll() {
        return [
            {
                id: 1,
                name: 'John Doe',
                bio: 'Passionate about guiding people through adventures.',
            },
            {
                id: 2,
                name: 'Jane Smith',
                bio: 'Experienced in leading nature excursions.',
            },
        ];
    }
    findOne(id) {
        return {
            id: +id,
            name: 'John Doe',
            bio: 'Passionate about guiding people through adventures.',
        };
    }
    update(id, updateTourGuideDto) {
        return {
            message: 'Tour guide updated successfully',
            data: {
                id: +id,
                name: updateTourGuideDto.name,
                bio: updateTourGuideDto.bio,
            },
        };
    }
    remove(id) {
        return {
            message: 'Tour guide deleted successfully',
            id: +id,
        };
    }
};
exports.TourGuideController = TourGuideController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tour guide' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The tour guide has been successfully created.',
        type: create_tour_guide_dto_1.CreateTourGuideDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tour_guide_dto_1.CreateTourGuideDto]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tour guides' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of all tour guides.',
        type: [create_tour_guide_dto_1.CreateTourGuideDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tour guide by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Tour Guide ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The tour guide has been successfully retrieved.',
        type: create_tour_guide_dto_1.CreateTourGuideDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Tour guide not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update tour guide by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Tour Guide ID' }),
    (0, swagger_1.ApiBody)({ type: update_tour_guide_dto_1.UpdateTourGuideDto }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The tour guide has been successfully updated.',
        type: update_tour_guide_dto_1.UpdateTourGuideDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Tour guide not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tour_guide_dto_1.UpdateTourGuideDto]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete tour guide by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Tour Guide ID' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'The tour guide has been successfully deleted.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Tour guide not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "remove", null);
exports.TourGuideController = TourGuideController = __decorate([
    (0, common_1.Controller)('tour-guide'),
    (0, swagger_1.ApiTags)('Tour Guide'),
    __metadata("design:paramtypes", [tour_guide_service_1.TourGuideService])
], TourGuideController);
//# sourceMappingURL=tour-guide.controller.js.map
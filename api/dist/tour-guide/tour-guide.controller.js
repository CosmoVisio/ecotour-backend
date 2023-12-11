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
let TourGuideController = class TourGuideController {
    constructor(tourGuideService) {
        this.tourGuideService = tourGuideService;
    }
    create(createTourGuideDto) {
        return this.tourGuideService.create(createTourGuideDto);
    }
    findAll() {
        return this.tourGuideService.findAll();
    }
    findOne(id) {
        return this.tourGuideService.findOne(+id);
    }
    update(id, updateTourGuideDto) {
        return this.tourGuideService.update(+id, updateTourGuideDto);
    }
    remove(id) {
        return this.tourGuideService.remove(+id);
    }
};
exports.TourGuideController = TourGuideController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tour_guide_dto_1.CreateTourGuideDto]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tour_guide_dto_1.UpdateTourGuideDto]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TourGuideController.prototype, "remove", null);
exports.TourGuideController = TourGuideController = __decorate([
    (0, common_1.Controller)('tour-guide'),
    __metadata("design:paramtypes", [tour_guide_service_1.TourGuideService])
], TourGuideController);
//# sourceMappingURL=tour-guide.controller.js.map